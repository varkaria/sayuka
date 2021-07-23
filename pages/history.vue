<template>
  <div id="search">
    <div class="mb-8">
      <p class="mb-8 text-lg font-bold leading-none tracking-tight text-gray-600 dark:text-gray-100">History {{ result.length }} of 20</p>
      <EleDoulist :data=result /> 
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      result: this.$store.state.doujin.history
    }
  }
}
</script>