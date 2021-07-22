<template>
  <div id="search">
    <div class="mb-8">
      <p class="mb-8 text-lg font-bold leading-none tracking-tight text-gray-600 dark:text-gray-100">Search Results for : {{ $route.params.query }}</p>
      <EleLoading v-if="load" />
      <EleDoulist :data=result /> 
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      result: {},
      load: false
    }
  },
  created() {
    this.FetchDoujinData('result')
  },
  methods: {
    async FetchDoujinData() {
      this.load = true
      const res = await this.$axios.$get(
        'https://api.varkaria.tech/get_doujins',
        {
          params: {
            q: this.$route.params.query,
            safe: this.$store.state.doujin.safemode
          },
        }
      )
      this.load = false
      this.result = res
    },
  },
}
</script>