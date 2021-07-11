<template>
    <div class="mb-8" :id="sort">
      <p class="text-lg leading-none font-bold text-gray-600 tracking-tight mb-8">{{ sort }} doujin</p>
      <div v-if='load == false' class="grid grid-flow-row grid-cols-2
      md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 transition-all gap-4">
        <div v-for="(item, i) in data" :key="i">
          <EleDoucard :data=item />
        </div>
      </div>
      <div class="flex justify-center" v-else>
          <div class="loader ease-linear rounded-full border-4 border-t-4 border-gray-200 h-12 w-12 mb-4"></div>
      </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      data: Object,
      load: false
    }
  },
  props: {
    sort: String,
  },
  methods: {
    async FetchDoujinData(sort = 'recent') {
      this.load = true
      const res = await this.$axios.$get('https://api.varkaria.tech/get_doujins', {
        params: {
          sort: sort.toLowerCase(),
        },
      })
      this.data = res
      this.load = false
    },
  },
  created() {
    this.FetchDoujinData(this.sort)
  },
}
</script>

<style scoped>
.loader {
	border-top-color: #333333;
	-webkit-animation: spinner 1.5s ease-out infinite;
	animation: spinner 1.5s ease-out infinite;
}

@-webkit-keyframes spinner {
	0% {
		-webkit-transform: rotate(0deg);
	}
	100% {
		-webkit-transform: rotate(360deg);
	}
}

@keyframes spinner {
	0% {
		transform: rotate(0deg);
	}
	100% {
		transform: rotate(360deg);
	}
}

</style>