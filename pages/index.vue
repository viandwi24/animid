<template>
  <div class="header">
    <Navbar />
    <Carousel class="mt-5">
      <CarouselItem v-for="(item, i) in carouselItems" :key="i" :index="i">
        <div class="image-container">
          <img :src="item.image" alt="Image">
        </div>
        <div class="content">
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
        </div>
      </CarouselItem>
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
    onMounted(fetchData)

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
.badge {
  @apply text-xs;

  background-color: theme('colors.blue.500');
  color: theme('colors.white');
  border-radius: 12px;
  padding: 4px 12px;
  margin-right: 8px;
  display: inline-block;
}
.header {
  z-index: 1;
  padding-top: 1.5rem;
  padding-bottom: 3.5rem;
  background-image: url('/images/news/3.jpeg');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;

  &::after {
    z-index: -1;
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(59, 130, 246, .95);
  }

  & .navbar,
  & .carousel-container {
    z-index: 2;
  }
}
</style>
