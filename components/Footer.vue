<template>
  <footer class="footer bg-primary relative pt-1 border-t-4 border-blue-600">
    <div class="container mx-auto px-6">
      <div class="sm:flex sm:mt-8 w-full">
        <div class="mt-8 flex text-center flex-col md:flex-row flex-1">
          <div class="w-full mb-6 md:mb-0 md:w-1/2">
            <NuxtLink to="/" tag="a" class="inline-block">
              <img :src="$static('/images/logo/white_46.png')" alt="Animid" class="inline-block">
            </NuxtLink>
          </div>
          <div class="flex-1 flex flex-col md:flex-row justify-between">
            <div class="flex flex-col">
              <span class="my-2"><a href="#" class="text-white  text-md hover:text-black">Donate</a></span>
            </div>
            <div class="flex flex-col">
              <span class="my-2"><a href="#" class="text-white  text-md hover:text-black">Apps</a></span>
              <span class="my-2"><a href="#" class="text-white  text-md hover:text-black">Site Stats</a></span>
              <span class="my-2"><a href="#" class="text-white  text-md hover:text-black">Recommendations</a></span>
              <span class="my-2"><a href="#" class="text-white  text-md hover:text-black">API</a></span>
            </div>
            <div class="flex flex-col">
              <span class="my-2"><a href="#" class="text-white text-md hover:text-black">Discord</a></span>
              <span class="my-2"><a href="#" class="text-white text-md hover:text-black">Facebook</a></span>
              <span class="my-2"><a href="#" class="text-white  text-md hover:text-black">Instagram</a></span>
              <span class="my-2"><a href="#" class="text-white text-md hover:text-black">Twitter</a></span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="mt-16 border-t border-blue-700 bg-blue-600 flex flex-col items-center">
      <div class="container mx-auto px-6">
        <div class="text-center py-3">
          <p class="text-xs text-white">
            © 2020 by Alfian Dwi Nugraha.
          </p>
        </div>
      </div>
    </div>
  </footer>
</template>
