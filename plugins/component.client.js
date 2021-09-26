import Vue from 'vue'

const mixin = {
  mounted() {
    require('@/assets/js/dropdown')
  }
}

Vue.mixin(mixin)
