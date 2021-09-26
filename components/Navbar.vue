<template>
  <div class="navbar">
    <div class="container mx-auto px-4 flex">
      <div class="brand">
        <img :src="$static('/images/logo/white_46.png')" alt="Logo">
        AnimID
      </div>
      <div class="menu">
        <div class="item">
          <NuxtLink to="/anime" tag="a" class="link">ANIME</NuxtLink>
        </div>
        <div class="item">
          <NuxtLink to="/" tag="a" class="link">MANGA</NuxtLink>
        </div>
        <div class="item">
          <NuxtLink to="/" tag="a" class="link">COMMUNITY</NuxtLink>
        </div>
        <div class="item">
          <NuxtLink to="/" tag="a" class="link">BLOG</NuxtLink>
        </div>
        <div class="item">
          <button class="link button-search">
            <font-awesome-icon :icon="['fas', 'search']" />
          </button>
        </div>
        <div class="item">
          <button class="link button-avatar">
            <div class="avatar">
              <img :src="$static('/images/avatars/1.png')" alt="Avatar">
            </div>
            <div class="dropdown">
              <div class="icon">
                <font-awesome-icon :icon="['fas', 'chevron-down']" />
              </div>
              <div class="menu">
                <NuxtLink to="/" tag="a" class="item">My Profile</NuxtLink>
                <NuxtLink to="/" tag="a" class="item">Logout</NuxtLink>
              </div>
            </div>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.link {
  transition: all .2s ease-in-out;
  &.button-search {
    background: theme('colors.blue.600');
    border-radius: 999px;
    padding: .4rem .6rem;
    font-size: .8rem;
    &:hover {
      background: theme('colors.blue.800');
    }
  }
  &.button-avatar {
    background: theme('colors.blue.600');
    border-radius: 999px;
    display: flex;
    align-items: center;
    .avatar {
      img {
        width: 32px;
        height: 32px;
        border-radius: 999px;
      }
    }
    .dropdown {
      margin-left: .2rem;
      padding: .1rem;
      padding-right: .35rem;
      .icon {
        transition: all .2s ease-in-out;
        padding: .2rem .45rem;
        background: theme('colors.blue.500');
        border-radius: 999px;
        font-size: .7rem;
        padding-top: .25rem;
      }
    }
    &:hover {
      background: theme('colors.blue.800');
      .dropdown {
        .icon {
          background: theme('colors.blue.700');
        }
      }
    }
  }
}
</style>
