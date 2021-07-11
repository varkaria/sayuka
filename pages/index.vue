<template>
  <div id="home">
    <div class="mb-8">
      <p class="mb-8 text-lg font-bold leading-none tracking-tight text-gray-600">Recent doujin</p>
      <EleDoulist :data=recent /> 
    </div>
    <div class="mb-8">
      <p class="mb-8 text-lg font-bold leading-none tracking-tight text-gray-600">Random doujin</p>
      <EleDoulist :data=random /> 
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      recent: {},
      random: {}
    }
  },
  created() {
    this.FetchDoujinData('recent')
    this.FetchDoujinData('random')
  },
  methods: {
    async FetchDoujinData(sort) {
      const res = await this.$axios.$get(
        'https://api.varkaria.tech/get_doujins',
        {
          params: {
            sort: sort.toLowerCase(),
          },
        }
      )
      this[`${sort}`] = res
    },
  },
}
</script>
