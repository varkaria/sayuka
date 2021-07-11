<template>
  <div class="hidden lg:flex lg:flex-shrink-0">
    <div
      class="flex flex-col w-64 border-r border-gray-200 pt-5 pb-4 bg-gray-100"
    >
      <div class="px-6">
        <p class="font-bold text-3xl text-gray-800">Sayuka</p>
        <p class="text-xs text-gray-500">1.0.0</p>
      </div>
      <div class="h-0 flex-1 flex flex-col overflow-y-auto">
        <div class="px-3 mt-5">
          <label htmlFor="search-desktop" class="sr-only"> Search </label>
          <div class="mt-1 relative rounded-md shadow-sm">
            <div
              class="
                absolute
                inset-y-0
                left-0
                pl-3
                flex
                items-center
                pointer-events-none
              "
              aria-hidden="true"
            >
              <svg
                class="mr-3 h-4 w-4 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                ></path>
              </svg>
            </div>
            <input
              type="text"
              name="search-desktop"
              id="search-desktop"
              class="
                focus:border-blue-500
                block
                w-full
                p-2
                pl-9
                sm:text-sm
                border-gray-300
                rounded-md
              "
              :value="value"
              @input="updateValue($event.target.value)"
              placeholder="Search"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['value'],
  methods: {
    updateValue(value) {
      this.$emit('input', value)
    },
  },
}
</script>
