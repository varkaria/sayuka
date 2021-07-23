<template>
  <div id="home">
    <div class="mb-8">
      <p class="mb-8 text-xl font-bold leading-none tracking-tight text-gray-600 dark:text-white"> Recent doujins</p>
      <EleLoading v-if="recent.load" />
      <EleDoulist v-else :data=recent.data /> 
    </div>
    <div class="mb-8">
      <p class="mb-8 text-xl font-bold leading-none tracking-tight text-gray-600 dark:text-white">Random doujins</p>
      <EleLoading v-if="random.load" />
      <EleDoulist v-else :data=random.data /> 
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      recent: {
        load: false,
        data: {}
      },
      random: {
        load: false,
        data: {}
      }
    }
  },
  watch: {
  '$store.state.doujin.vanillamode' () {
    this.FetchDoujinData('recent')
    this.FetchDoujinData('random')
  }
},
  created() {
    this.FetchDoujinData('recent')
    this.FetchDoujinData('random')
  },
  methods: {
    async FetchDoujinData(sort) {
      this[`${sort}`].load = true
      const res = await this.$axios.$get(
        'https://api.varkaria.tech/get_doujins',
        {
          params: {
            sort: sort.toLowerCase(),
            safe: this.$store.state.doujin.vanillamode
          },
        }
      )
      this[`${sort}`].data = res
      this[`${sort}`].load = false
    },
  }
}
</script>
