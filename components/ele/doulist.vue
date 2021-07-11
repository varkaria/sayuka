<template>
    <div :id="sort" class="mb-8">
      <p class="mb-8 text-lg font-bold leading-none tracking-tight text-gray-600">{{ sort }} doujin</p>
      <div v-if='load == false' class="grid grid-flow-row grid-cols-2 gap-4 transition-all lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
        <div v-for="(item, i) in data" :key="i">
          <EleDoucard :data=item />
        </div>
      </div>
      <div v-else class="flex justify-center">
          <div class="w-12 h-12 mb-4 ease-linear border-4 border-t-4 border-gray-200 rounded-full loader"></div>
      </div>
    </div>
</template>

<script>
export default {
  props: {
    sort: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      data: Object,
      load: false
    }
  },
  created() {
    this.FetchDoujinData(this.sort)
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