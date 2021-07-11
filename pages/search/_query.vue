<template>
  <div id="search">
    <div class="mb-8">
      <p class="mb-8 text-lg font-bold leading-none tracking-tight text-gray-600">Search Results for : {{ $route.params.query }}</p>
      <EleDoulist :data=result /> 
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      result: {}
    }
  },
  created() {
    this.FetchDoujinData('result')
  },
  methods: {
    async FetchDoujinData() {
      const res = await this.$axios.$get(
        'https://api.varkaria.tech/get_doujins',
        {
          params: {
            q: this.$route.params.query,
          },
        }
      )
      this.result = res
    },
  },
}
</script>