<template>
  <div class="header">
    <div class="navbar">
      <div class="container mx-auto flex">
        <div class="brand">
          MyAnimeList
        </div>
        <div class="menu items-center">
          <div class="item">
            <NuxtLink to="/" tag="a" class="item">ANIME</NuxtLink>
          </div>
          <div class="item">
            <NuxtLink to="/" tag="a" class="item">MANGA</NuxtLink>
          </div>
          <div class="item">
            <NuxtLink to="/" tag="a" class="item">COMMUNITY</NuxtLink>
          </div>
          <div class="item">
            <NuxtLink to="/" tag="a" class="item">BLOG</NuxtLink>
          </div>
        </div>
      </div>
    </div>
    <Carousel class="mt-5">
      <CarouselItem index="0">
        <div class="image-container">
          <img src="/images/news/2.jpeg" alt="Image">
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
            Love Live! Superstar!! Tampilkan Para Anggota Liella! Lewat PV Baru Anime
          </div>
        </div>
      </CarouselItem>
      <CarouselItem index="1">
        <div class="image-container">
          <img src="/images/news/4.jpeg" alt="Image">
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
            MAPPA Tampilkan PV Perdana Anime takt op. Destiny
          </div>
        </div>
      </CarouselItem>
      <CarouselItem index="2">
        <div class="image-container">
          <img src="/images/news/5.jpeg" alt="Image">
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
            Hasil Voting Popularitas Karakter Jaku-Chara Tomozaki-kun Dirilis
          </div>
        </div>
      </CarouselItem>
    </Carousel>
  </div>
</template>

<script>
export default {}
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
