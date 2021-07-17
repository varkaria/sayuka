<template>
    <div class="flex flex-wrap 2xl:mt-2">
      <div v-for="(tag, i) in tags" :key="i" class="p-1">
        <div v-if="i < 6" :class="`text-xs 2xl:text-sm uppercase rounded-md px-2 py-1 text-white bg-${tag.color}-600 font-semibold`">
          {{ tag.name }}
        </div>
        <div v-if="i > 6 && i < 10" :class="`text-xs 2xl:text-sm hidden 2xl:block uppercase rounded-md px-2 py-1 text-white bg-${tag.color}-600 font-semibold`">
          {{ tag.name }}
        </div>
        <div v-if="i == 6" :class="`text-xs block 2xl:hidden uppercase rounded-md px-2 py-1 text-white bg-gray-600 font-semibold`">
          ...
        </div>
      </div>
    </div>
</template>

<script>
export default {
  props: {
    tags: {
      type: Array,
      required: true
    }
  },
}
</script>