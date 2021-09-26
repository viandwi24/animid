<template>
  <div class="carousel-container">
      <div class="nav prev" @click="prev">
        <span><font-awesome-icon :icon="['fas', 'chevron-left']" /></span>
      </div>
      <div class="container mx-auto carousel">
        <slot ref="items" :activeItem="activeItem" />
      </div>
      <div class="nav next" @click="next">
        <span><font-awesome-icon :icon="['fas', 'chevron-right']" /></span>
      </div>
    </div>
</template>

<script>
import { defineComponent, onMounted, ref } from '@nuxtjs/composition-api'

export default defineComponent({
  setup(_props, { slots }) {
    const { init, next, prev, activeItem } = useCarousel()

    onMounted(init)

    return {
      activeItem,
      next,
      prev,
    }
  },
})

function useCarousel() {
  const activeItem = ref(0)
  const items = ref(undefined)

  const init = () => {
    items.value = document.querySelector('.carousel-container').querySelectorAll('.item-container')
    updatePosition()
  }

  const updatePosition = () => {
    items.value.forEach((container, index) => {
      const item = container.querySelector('.item')
      const content = item.querySelector('.content')

      if (index === activeItem.value) {
        container.style.position = 'relative'
        container.style.display = 'block'
        container.style.zIndex = 3
        container.style.transform = ''
        container.style.opacity = 1
        item.style.backgroundColor = '#F9FAFB'
        content.style.opacity = 1
      } else {
        container.style.display = 'block'
        container.style.position = 'absolute'
        container.style.top = 0
        container.style.left = 0
        container.style.zIndex = 2
        container.style.transform = 'translateX(7%) scale(0.9)'
        container.style.opacity = 1
        item.style.backgroundColor = '#6CB1EF'
        content.style.opacity = 0
      }
    })
  }

  const next = () => {
    const prevItemIndex = activeItem.value
    const nextItemIndex = (prevItemIndex + 1) % items.value.length
    activeItem.value = nextItemIndex
    const prevItem = items.value[prevItemIndex]
    const nextItem = items.value[nextItemIndex]
    animateNav(prevItem, nextItem)
  }

  const prev = () => {
    const prevItemIndex = activeItem.value
    const nextItemIndex = (prevItemIndex - 1 + items.value.length) % items.value.length
    activeItem.value = nextItemIndex
    const prevItem = items.value[prevItemIndex]
    const nextItem = items.value[nextItemIndex]
    animateNav(prevItem, nextItem)
  }

  const animateNav = (prevItem, nextItem) => {
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
      nextItem.animate([
        { opacity: 0, transform: 'translateX(7%) scale(0.9)' },
        { opacity: 1, transform: 'translateX(0%) scale(1)' },
      ], {
        duration: 500,
        easing: 'ease-in-out',
      })
    }, 100)

    setTimeout(updatePosition, 500)
  }

  return {
    activeItem,
    items,
    init,
    updatePosition,
    next,
    prev
  }
}

</script>

