<template>
  <div ref="carouselContainer" class="carousel-container overflow-hidden">
      <div v-if="activeItem > 0" class="nav prev" @click="prev">
        <span><font-awesome-icon :icon="['fas', 'chevron-left']" /></span>
      </div>
      <div class="container mx-auto px-4 relative carousel">
        <slot
          ref="carouselItems"
          name="items"
          :activeItem="activeItem"
          :next="next"
          :prev="prev"
          :nav="nav"
        />
      </div>
      <div v-if="activeItem < (itemCount-1)" class="nav next" @click="next">
        <span><font-awesome-icon :icon="['fas', 'chevron-right']" /></span>
      </div>
    </div>
</template>

<script>
import { defineComponent, onMounted, ref, useContext } from '@nuxtjs/composition-api'

export default defineComponent({
  setup(_props) {
    const carouselContainer = ref(null)
    const { init, next, prev, nav, activeItem, itemCount, indicatorEl } = useCarousel({ carouselContainer })

    onMounted(() => {
      setTimeout(() => {
        init()
      }, 50);
    })

    return {
      itemCount,
      activeItem,
      next,
      prev,
      nav,
      carouselContainer,
      indicatorEl
    }
  },
})

function useCarousel({ carouselContainer }) {
  const { $sleep } = useContext()

  const activeItem = ref(0)
  const itemCount = ref(0)
  const items = ref(undefined)

  const init = () => {
    items.value = carouselContainer.value.querySelectorAll('.item-container')
    itemCount.value = items.value.length
    updatePosition()
  }

  const updatePosition = () => {
    items.value.forEach((container, index) => {
      const item = container.querySelector('.item')
      const imageContainer = container.querySelector('.image-container')
      const content = item.querySelector('.content')

      if (index === activeItem.value) {
        container.style.position = 'relative'
        container.style.display = 'block'
        container.style.zIndex = 3
        container.style.transform = ''
        container.style.opacity = 1
        item.style.transition = 'transition: background .8s ease-in-out'
        try {
          item.style.removeProperty('background-color')
          item.style.removeAttribute('background-color')
        } catch (error) {
        }
        content.style.opacity = 1
        imageContainer.style.opacity = 1
      } else {
        container.style.display = 'block'
        container.style.position = 'absolute'
        container.style.top = 0
        container.style.left = 0
        container.style.zIndex = 2
        container.style.transform = 'translateX(7%) scale(0.9)'
        container.style.opacity = 1
        try {
          item.style.removeProperty('transition')
          item.style.removeAttribute('transition')
        } catch (error) {
        }
        item.style.backgroundColor = '#6CB1EF'
        content.style.opacity = 0
        imageContainer.style.opacity = 0
      }
    })
  }

  const next = () => {
    const prevItemIndex = activeItem.value
    const nextItemIndex = (prevItemIndex + 1) % items.value.length
    activeItem.value = nextItemIndex
    const prevItem = items.value[prevItemIndex]
    const nextItem = items.value[nextItemIndex]

    setTimeout(() => {
      items.value.forEach((container, index) => {
        if (index === prevItem || index === nextItem) return
        container.style.opacity = 0
      })
      prevItem.animate([
        { opacity: 1, transform: 'translateX(0%) scale(1)' },
        { opacity: 0, transform: 'translateX(-100%) scale(1)' },
      ], {
        duration: 500,
        easing: 'ease-in-out',
      })
      setTimeout(() => {
        nextItem.style.marginLeft = '1rem'
        nextItem.style.marginRight = '1rem'
        nextItem.animate([
          { opacity: 0, transform: 'translateX(7%) scale(0.9)' },
          { opacity: 1, transform: 'translateX(0%) scale(1)' },
        ], {
          duration: 500,
          easing: 'ease-in-out',
        }).onfinish = () => {
          updatePosition()
        }
        nextItem.querySelector('.image-container').animate([
          { opacity: 0 },
          { opacity: 1 },
        ], {
          duration: 500,
          easing: 'ease-in-out',
        })
        nextItem.querySelector('.item .content').animate([
          { opacity: 0 },
          { opacity: 1 },
        ], {
          duration: 500,
          easing: 'ease-in-out',
        })
      }, 1)
    }, 1)
  }

  const prev = () => {
    const prevItemIndex = activeItem.value
    const nextItemIndex = (prevItemIndex - 1 + items.value.length) % items.value.length
    const prevItem = items.value[prevItemIndex]
    const nextItem = items.value[nextItemIndex]

    items.value.forEach((container, index) => {
        if (index === prevItemIndex || index === nextItemIndex) return
      container.style.opacity = 0
    })

    nextItem.animate([
      { opacity: 0, transform: 'translateX(-100%) scale(1)' },
      { opacity: 1, transform: 'translateX(0%) scale(1)' },
    ], {
      duration: 500,
      easing: 'ease-in-out',
    })

    setTimeout(() => {
      prevItem.animate([
        { opacity: 1, transform: 'translateX(0%) scale(1)' },
        { opacity: 0, transform: 'translateX(7%) scale(0.9)' },
      ], {
        duration: 500,
        easing: 'ease-in-out',
      })
    }, 100)

    activeItem.value = nextItemIndex
    setTimeout(() => {
      items.value.forEach((container, index) => {
        if (index === prevItemIndex || index === nextItemIndex) return
        container.style.opacity = 0
      })
      updatePosition(updatePosition)
    }, 400)
  }

  const nav = async (index) => {
    if (index === activeItem.value) return
    if (index > activeItem.value) {
      const offset = index - activeItem.value
      for (let i = 0; i < offset; i++) {
        await $sleep(100)
        next()
      }
    } else {
      const offset = activeItem.value - index
      for (let i = 0; i < offset; i++) {
        await $sleep(100)
        prev()
      }
    }
  }

  return {
    activeItem,
    items,
    init,
    updatePosition,
    next,
    prev,
    nav,
    itemCount
  }
}

</script>

