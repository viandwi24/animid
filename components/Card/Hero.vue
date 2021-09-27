<template>
  <div class="card" :style="`background-image: url('${$static(anime.background)}');`">
    <div class="hero-container">
      <img :src="$static(anime.hero)" alt="Hero">
    </div>
    <div class="content">
      <div class="detail">
        <span>Season {{ anime.season }}</span>
        <span>•</span>
        <span>{{ anime.year }}</span>
      </div>
      <div class="title">
        {{ anime.title }}
      </div>
      <div class="rating">
        <font-awesome-icon v-for="i in 5" :key="i" :icon="['fas', 'star']" class="text-yellow-300" />
      </div>
      <div class="description">
        {{ anime.description }}
      </div>
      <div class="action">
        <button>Watch Now</button>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  props: {
    anime: {
      type: Object,
      required: true
    }
  },
  setup() {
  }
})
</script>

<style lang="scss" scoped>
.card {
  @apply shadow-xl;

  background: theme('colors.gray.200');
  display: flex;
  flex-direction: column;
  border-radius: 1rem;
  position: relative;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(27, 27, 27, 0.85);
    border-radius: 1rem;
  }

  .hero-container {
    height: 18rem;
    width: 50%;
    position: relative;
    display: none;
    z-index: 2;

    img {
      position: absolute;
      left: 0;
      top: 50%;
      transform: translateY(-50%);
    }
  }

  .content {
    width: 100%;
    flex: 1 1 0%;
    z-index: 2;
    padding: 4rem 2rem;

    .detail {
      color: theme('colors.gray.300');
    }

    .title {
      color: theme('colors.white');
      font-size: 2.5rem;
      font-weight: 700;
    }

    .rating {
      margin-bottom: 1rem;
    }

    .description {
      @apply text-sm;

      color: theme('colors.gray.300');
      margin-bottom: 1rem;
    }
  }
}

@screen md {
  .card {
    flex-direction: row;
    .hero-container {
      display: block;
    }
    .content {
      @apply w-2/4;

      padding: 4rem 0;
      padding-right: 1rem;
    }
  }
}
</style>
