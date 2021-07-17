<template>
  <div class="flex h-screen overflow-hidden bg-gray-50 dark:bg-gray-700">
    <NavDesktopMain v-model="search" />
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
}
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
