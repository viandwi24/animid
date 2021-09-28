<template>
  <div>
    <transition name="default">
      <div>
        <div class="header" :style="`background-image: url('${$static('/images/news/3.jpeg')}');`">
          <Navbar />
        </div>
        <div class="screen">
          <Nuxt />
        </div>
        <Footer />
      </div>
    </transition>
  </div>
</template>

<script>
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  head() {
    return {
      titleTemplate: '%s - AnimID',
    }
  }
})
</script>

