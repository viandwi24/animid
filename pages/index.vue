<template>
  <div class="header">
    <Navbar />
    <Carousel class="mt-5">
      <template #items="{ nav, activeItem }">
        <CarouselItem v-for="(item, i) in carouselItems" :key="i" :index="i">
          <div class="image-container">
            <img :src="item.image" alt="Image">
          </div>
          <div class="content flex flex-col justify-between">
            <div class="flex-1 container">
              <div class="mb-4">
                <div class="badge">
                  Featured
                </div>
                <div class="badge">
                  News
                </div>
              </div>
              <div class="text-4xl font-semibold mb-4 text-black">
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
</template>

<script>
import { defineComponent, onMounted, reactive, useContext, useFetch } from "@nuxtjs/composition-api";

export default defineComponent({
  setup() {
    // composable
    const { fetchData, carouselItems } = useData()

    // life cycle hook
    onMounted(() => {
      fetchData()
    })

    // return
    return {
      carouselItems
    }
  }
})

function useData() {
  const { $http } = useContext()
  const carouselItems = reactive([])

  // methods
  const { fetch } = useFetch(async () => {
    try {
      // fetch data
      const res = await $http({
        method: "GET",
        url: "/carousel",
      })
      // clear items
      carouselItems.splice(0, carouselItems.length)
      // push new items
      carouselItems.push(...res.data)
    } catch (error) {
    }
  })

  return {
    carouselItems,
    fetchData: fetch
  }
}
</script>

<style lang="scss">
@import '@/assets/scss/pages/index.scss';
</style>
