<template>
  <div class="flex h-screen overflow-hidden bg-gray-50 dark:bg-gray-700">
    <div v-if="!isMobile()" class="flex">
      <NavDesktopMain v-model="search" />
    </div>
    <div v-else>
      <NavMobileMain v-model="search" />
    </div>
    <div class="flex flex-col flex-1 w-0 overflow-hidden">
      <main
        class="relative z-0 flex-1 p-10 pb-6 overflow-y-auto focus:outline-none"
      >
        <transition name="slide">
          <Nuxt />
        </transition>
      </main>
    </div>
  </div>
</template>

<script>

export default {
  transition: 'slide',
  data() {
    return {
      search: '',
    }
  },
  methods: { isMobile() { 
    if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) 
      { return true } 
    else 
      { return false }  
    }, 
  },
};
</script>

<style>
.slide-bottom-enter-active,
.slide-bottom-leave-active {
  transition: opacity 0.25s ease-in-out, transform 0.25s ease-in-out;
}
.slide-bottom-enter,
.slide-bottom-leave-to {
  opacity: 0;
  transform: translate3d(0, 15px, 0);
}
</style>
