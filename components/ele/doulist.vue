<template>
  <div class="grid grid-flow-row grid-cols-2 gap-4 transition-all lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
    <div v-for="(item, i) in data" :key="i">
      <EleDoucard :data=item />
    </div>
    <div v-if="data.length == 0">
        <h1 class="text-6xl font-light text-left text-gray-700 dark:text-gray-200">: (</h1>
        <h2 class="mt-6 text-lg font-semibold text-left text-gray-700 dark:text-gray-200">Coun't found any doujins</h2>
        <h2 class="mt-1 font-light text-left text-gray-700 dark:text-gray-200 text-md">Try again later?</h2>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    data: {
      type: [Object, Array],
      required: true
    }
  },
}
</script>