<template>
    <div class="flex p-5 space-x-3 bg-white rounded-full loader">
      <div class="w-5 h-5 bg-gray-800 rounded-full animate-bounce"></div>
      <div class="w-5 h-5 bg-gray-800 rounded-full animate-bounce"></div>
      <div class="w-5 h-5 bg-gray-800 rounded-full animate-bounce"></div>
    </div>
</template>

<style scoped>
.loader div {
  animation-duration: 0.5s;
}

.loader div:first-child {
  animation-delay: 0.1s;
}

.loader div:nth-child(2) {
  animation-delay: 0.3s;
}

.loader div:nth-child(3) {
  animation-delay: 0.6s;
}
</style>
