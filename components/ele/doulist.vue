<template>
  <div class="grid grid-flow-row grid-cols-2 gap-4 transition-all lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
    <div v-for="(item, i) in data" :key="i">
      <EleDoucard :data=item />
    </div>
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