<template>
  <div class="relative overflow-hidden bg-gray-200 dark:bg-gray-700 rounded-xl dou-card">
    <NuxtLink :to="`/doujin/${data.id}`">
      <div class="absolute top-0 bottom-0 left-0 right-0 z-10 flex flex-col justify-between w-full px-4 py-6 text-white transition duration-200 ease-in-out opacity-0 bg-black-overlay hover:opacity-100 md:px-5 lg:px-6 2xl:py-8">
        <div>
            <p class="text-xs truncate font-regular sm:text-sm md:text-sm">
            {{ data.title }}
          </p>
          <p class="font-semibold truncate 2xl:overflow-clip text-md sm:text-lg md:text-xl">
            {{ data.th_title }}
          </p>
          <EleDoutags :tags='data.tags' />
        </div>
        <div class="flex pt-1">
          <div class="flex items-center pr-2 text-sm font-medium">{{ data.artist }}</div>
        </div>
      </div>
      <div class="transition-all" :class="{ 'safe-mode' : $store.state.doujin.safemode }">
        <div style="box-sizing: border-box; display: block; max-width: 100%">
          <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzUwIiBoZWlnaHQ9IjUwMyIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2ZXJzaW9uPSIxLjEiLz4="/>
        </div>
        <progressive-img
          :src="`https://api.varkaria.tech/get_image/${data.preview[0]}/${data.preview[1]}?o=True`"
          class="overflow-hidden img-card blur"
        />
      </div>
    </NuxtLink>
  </div>
</template>

<script>
export default {
  props: {
    data: {
      type: Object,
      required: true
    }
  },
}
</script>

<style scoped>
.bg-black-overlay {
  background: rgba(0, 0, 0, 0.705);
}

.img-card {
  position: absolute;
  top: 0;
  min-width: 100%;
  max-width: 100%;
  min-height: 100%;
  max-height: 100%;
  object-fit: cover;
  transition: 0.1s ease
}

.dou-card:hover .img-card {
    filter: blur(2px);
}

.dou-card {
    transition: 0.1s ease
}

.dou-card:hover {
    transform: scale(1.01);
}

.img-card.blur {
  filter: blur(0px);
}

.safe-mode {
  filter: blur(5px)
}
</style>

