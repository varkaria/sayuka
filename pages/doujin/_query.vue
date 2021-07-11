<template>
  <div id="doujin">
    <div class="mb-8">
        <img v-for='(img, i) in result.preview_api' :key="i" :src=img>
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
    },
  },
}
</script>