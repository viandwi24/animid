<template>
  <div class="indicators">
    <div
      v-for="i in itemCount"
      :key="i"
      class="indicator"
      :class="{ 'active': ((i-1) == activeItem) }"
      :data-index="(i-1)"
      @click="nav(i-1)"
    />
  </div>
</template>
<script>
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  props: {
    itemCount: {
      type: Number,
      required: true
    },
    activeItem: {
      type: Number,
      required: true
    },
    nav: {
      type: Function,
      required: true
    }
  }
})
</script>
