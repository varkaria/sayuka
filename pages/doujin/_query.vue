<template>
  <div id="doujin">
    <div class="mb-8">
        <EleDoupageImage v-for='(img, i) in result.images' :key="i" :img=img />
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
    this.FetchDoujinData()
  },
  methods: {
    async FetchDoujinData() {
      const res = await this.$axios.$get(`https://api.varkaria.tech/get_doujin/${this.$route.params.query}`)
      this.result = res
      this.$store.commit('doujin/addtohistory', res)
    },
  },
}
</script>