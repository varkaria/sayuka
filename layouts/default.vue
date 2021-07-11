<template>
  <div class="flex h-screen overflow-hidden bg-gray-50">
    <NavDesktopMain v-model="search" />
    <div class="flex flex-col flex-1 w-0 overflow-hidden">
      <main class="relative z-0 flex-1 p-10 pb-6 overflow-y-auto focus:outline-none">
        <Nuxt />
      </main>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      search: ''
    }
  }
}
</script>