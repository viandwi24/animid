import Vue from 'vue'

const mixin = {
  mounted() {
    require('~/assets/js/components/dropdown')
  }
}

Vue.mixin(mixin)
