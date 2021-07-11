<template>
  <div class="h-screen flex overflow-hidden bg-gray-50">
    <NavDesktopMain v-model="search" />
    <div class="flex flex-col w-0 flex-1 overflow-hidden">
      <main class="flex-1 relative z-0 overflow-y-auto focus:outline-none pb-6 p-10">
        <Nuxt />
      </main>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      search: '',
    }
  },
}
</script>
