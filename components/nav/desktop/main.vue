<template>
  <div class="hidden lg:flex lg:flex-shrink-0">
    <div class="flex flex-col w-64 pt-5 pb-4 bg-gray-100 border-r border-gray-200">
      <div class="px-6">
        <NuxtLink to="/">
        <p class="text-3xl font-bold text-gray-800">Sayuka</p>
        </NuxtLink>
        <p class="font-bold text-green-500 text-md">Safe mode ON</p>
      </div>
      <div class="flex flex-col flex-1 h-0 overflow-y-auto">
        <div class="px-3 mt-5">
          <label htmlFor="search-desktop" class="sr-only"> Search </label>
          <div class="relative mt-1 rounded-md shadow-sm">
            <div
              class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none "
              aria-hidden="true"
            >
              <svg
                class="w-4 h-4 mr-3 text-gray-400"
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
              id="search-desktop"
              v-model="query" 
              type="text"
              name="search-desktop"
              class="block w-full p-2 border-gray-300 rounded-md focus:border-blue-500 pl-9 sm:text-sm"
              placeholder="Search"
              @keypress.enter="goToSearchPage"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      query: ''
    }
  },
  methods: {
    goToSearchPage() {
      if (this.query === '') {
        this.$router.push({ name: 'index', params: { query: this.query } })
      } else {
        this.$router.push({ name: 'search-query', params: { query: this.query } })
      }
    }    
  },
}
</script>
