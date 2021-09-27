import Vue from 'vue'

import { initDropdown } from '@/assets/js/components/dropdown'

const mixin = {
  watch:{
    $route (to, from){
      initDropdown()
    }
  },
  mounted() {
    initDropdown()
  }
}

Vue.mixin(mixin)
