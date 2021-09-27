<template>
  <div class="navbar">
    <div class="container mx-auto px-4 flex">
      <NuxtLink to="/" class="brand">
        <img :src="$static('/images/logo/white_46.png')" alt="Logo">
        <span>AnimID</span>
      </NuxtLink>
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
          <div class="button-theme">
            <input id="checkbox" v-model="theme" type="checkbox" class="checkbox">
            <label for="checkbox" class="label">
              <font-awesome-icon :icon="['fas', 'moon']" />
              <font-awesome-icon :icon="['fas', 'sun']" />
              <div class="ball" />
            </label>
          </div>
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
                <div class="item">
                  <NuxtLink to="/" tag="a" class="link">My Profile</NuxtLink>
                </div>
                <div class="item">
                  <NuxtLink to="/" tag="a" class="link">Messenger</NuxtLink>
                </div>
                <div class="item">
                  <NuxtLink to="/" tag="a" class="link">Logout</NuxtLink>
                </div>
              </div>
            </div>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent, onBeforeUnmount, onMounted, ref, watch } from '@vue/composition-api'

export default defineComponent({
  setup() {
    const { theme, toggleTheme } = useTheme()

    return {
      theme,
      toggleTheme
    }
  },
})
function useTheme() {
  const theme = ref(false)

  // lifecycle
  const onSystemThemeChange = e => {
    const systemTheme = e.matches ? "dark" : "light";
    theme.value = (systemTheme === "dark")
    console.log(systemTheme)
  }
  onMounted(() => {
    const mql = window.matchMedia("(prefers-color-scheme: dark)")
    mql.addEventListener('change', onSystemThemeChange);
    theme.value = (mql.matches)
  })
  onBeforeUnmount(() => {
    window.matchMedia('(prefers-color-scheme: dark)').removeEventListener('change', onSystemThemeChange);
  })

  // watch
  watch(theme, () => toggleTheme())

  // methods
  const toggleTheme = () => {
    localStorage.setItem('theme', theme.value ? 'dark' : 'light')
    applyTheme()
  }
  const applyTheme = () => {
    const selectedTheme = localStorage.getItem('theme') || 'light'
    theme.value = (selectedTheme === 'dark')
    if (selectedTheme === 'dark') {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }

  return {
    theme,
    toggleTheme
  }
}
</script>


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
.button-theme {
  position: relative;
  .checkbox {
    cursor: pointer;
    opacity: 0;
    position: absolute;
  }
  .label {
    cursor: pointer;
    width: 38px;
    height: 20px;
    background-color: theme('colors.blue.600');
    display: flex;
    border-radius:50px;
    align-items: center;
    justify-content: space-between;
    padding: 5px;
    position: relative;
    transform: scale(1.5);
  }
  .ball {
    width: 14px;
    height: 14px;
    background-color: white;
    position: absolute;
    top: 3px;
    left: 0;
    margin-left: 4px;
    margin-right: 3px;
    border-radius: 50%;
    transition: transform 0.2s linear;
  }
  .checkbox:checked + .label .ball{
    transform: translateX(17px);
  }
  .fa-moon, .fa-sun {
    font-size: .6rem;
  }
  .fa-moon {
    color: white;
  }
  .fa-sun {
    color: yellow;
  }
}
</style>
