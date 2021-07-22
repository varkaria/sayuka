<template>
  <div class="flex p-5 space-x-3">
    <div class="w-12 h-12 border-4 border-gray-600 rounded-full dark:border-gray-300 loader" />
  </div>
</template>

<style scoped>
@keyframes loader-rotate {
  0% {
    transform: rotate(0);
  }
  100% {
    transform: rotate(360deg);
  }
}

.loader {
  border-right-color: transparent;
  animation: loader-rotate 1s linear infinite;
}
</style>
