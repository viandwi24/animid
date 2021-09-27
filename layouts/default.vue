<template>
  <div>
    <transition name="default">
      <Nuxt />
    </transition>
  </div>
</template>

<style lang="scss">
.default-enter-active, .default-leave-active {
  transition: opacity .5s ease-out;
  transform: scale(1);
}
.default-enter, .default-leave-active {
  opacity: 0;
  transform: scale(0.5);
}
</style>
