<template>
  <div>
    <div class="header" :style="`background-image: url('${$static('/images/news/3.jpeg')}');`">
      <Navbar />
      <Carousel v-if="true" class="mt-5 mb-8">
        <template #items="{ nav, activeItem }">
          <CarouselItem v-for="(item, i) in carouselItems" :key="i" :index="i">
            <div class="image-container">
              <img :src="$static(item.image)" alt="Image">
            </div>
            <div class="content flex flex-col justify-between">
              <div class="flex-1 container">
                <div class="mb-2">
                  <div v-for="(tag, j) in item.tags" :key="j" class="badge">
                    {{ tag }}
                  </div>
                </div>
                <div class="text-4xl font-semibold mb-4">
                  {{ item.title }}
                </div>
                <div class="text-sm">
                  <font-awesome-icon :icon="['fas', 'calendar']" class="mr-1 text-primary" />
                  <span class="text-muted">{{ item.date }}</span>
                </div>
              </div>
              <div>
                <CarouselIndicators :active-item="activeItem" :item-count.sync="carouselItems.length" :nav="nav" />
              </div>
            </div>
          </CarouselItem>
        </template>
      </Carousel>
    </div>
    <section class="container mx-auto px-4 my-10 md:my-40">
      <div class="flex flex-col space-y-4 lg:flex-row lg:space-x-4 lg:space-y-0">
        <CardHero v-for="(item, i) in animeHighlightedItems" :key="i" :anime="item" />
      </div>
    </section>
  </div>
</template>

<script>
import { defineComponent, onMounted, reactive, useContext, useFetch } from "@nuxtjs/composition-api";

export default defineComponent({
  setup() {
    // composable
    const { fetchData, carouselItems, animeHighlightedItems } = useData()

    // life cycle hook
    onMounted(() => {
      fetchData()
    })

    // return
    return {
      carouselItems,
      animeHighlightedItems
    }
  }
})

function useData() {
  const { $http } = useContext()
  const carouselItems = reactive([])
  const animeHighlightedItems = reactive([])

  // methods
  const { fetch } = useFetch(() => {
    // fetch carousel items
    $http({
      method: "GET",
      url: "/carousel",
    }).then((res) => {
      carouselItems.splice(0, carouselItems.length)
      carouselItems.push(...res.data)
    })
    // fetch highlited anime
    $http({
      method: "GET",
      url: "/anime/highlighted",
    }).then((res) => {
      animeHighlightedItems.splice(0, animeHighlightedItems.length)
      animeHighlightedItems.push(...res.data)
    })
  })

  return {
    carouselItems,
    animeHighlightedItems,
    fetchData: fetch
  }
}
</script>

<style lang="scss">
@import '@/assets/scss/pages/index.scss';
</style>
