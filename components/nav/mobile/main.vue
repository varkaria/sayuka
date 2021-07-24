<template>
  <div class="fixed flex items-center w-full h-16 px-6 bg-gray-100 gap-x-4 dark:bg-gray-600 z-index-10">
    <NuxtLink to="/">
      <p class="text-xl font-bold text-gray-800 md:text-2xl dark:text-gray-100">Sayuka</p>
    </NuxtLink>

    <p v-if="$store.state.doujin.safemode" class="pt-1 text-xs font-bold text-green-500 dark:text-green-300 md:text-base">Safe mode ON</p>
    <p v-else class="pt-1 text-xs font-bold text-red-500 dark:text-red-300 md:text-base">Safe mode OFF</p>
    <p v-if="$store.state.doujin.vanillamode" class="flex-grow pt-1 text-xs font-bold text-green-500 dark:text-green-300 md:text-base">Vanilla Mode ON</p>
    <p v-else class="flex-grow pt-1 text-xs font-bold text-red-500 dark:text-red-300 md:text-base">Vanilla Mode OFF</p>
      
    <div :class="open">
      <button class="mt-1 text-2xl font-bold text-black outline-none dark:text-white" @click="tog()">&#9776;</button>
    </div>
    <nav
    :class="open ? 'navbar-open' : 'navbar-close'"
    class="absolute top-0 z-20 h-screen overflow-x-scroll bg-gray-100 w-72 navbar dark:bg-gray-600"
    >
      <div class="flex justify-end px-4 py-4">
        <button class="flex items-center gap-2 text-xl text-gray-600 dark:text-white" @click="tog()">
          <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg> Close
        </button>
      </div>
      <div class="mx-4 my-4">
        <label htmlFor="search-desktop" class="sr-only"> Search </label>
          <div class="relative mt-1 rounded-md shadow-sm">
            <div
              class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"
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
              class="block w-full p-2 border-gray-300 rounded-md dark:border-gray-600 dark:bg-gray-700 dark:text-gray-100 focus:border-blue-500 pl-9 sm:text-sm"
              placeholder="Search"
              @keypress.enter="goToSearchPage"
            />
          </div>
      </div>
      <ul class="list-none">

        <li class="mx-4 mt-2">
          <h3
            class="text-xs font-semibold leading-4 tracking-wider text-gray-500 uppercase dark:text-gray-200"
          >
            Page
          </h3>
        </li>

        <li class="mx-4 mt-2">
          <div class="space-y-1">

            <nuxt-link to="/">
              <a class="flex flex-row nav-button gap-x-4">
                <HomeIcon class="icon"></HomeIcon>
                Home</a
              >
            </nuxt-link>

            <nuxt-link to="/history">
              <a class="flex flex-row nav-button gap-x-4">
                <ArchiveIcon class="icon"></ArchiveIcon>
                History</a
              >
            </nuxt-link>
            
          </div>
        </li>

        <li class="mx-4 mt-2">
          <h3
            class="text-xs font-semibold leading-4 tracking-wider text-gray-500 uppercase dark:text-gray-200"
          >
            Settings
          </h3>
        </li>
        
        <li class="mx-4 mt-1">
          <a class="flex flex-row nav-button gap-x-2" @click="Setcolor()">
            <SunIcon class="icon"></SunIcon>
            {{ colors[cur_color] }} Mode
          </a>
        </li>
        
        <li class="mx-4 mt-1">
          <a class="flex flex-row nav-button gap-x-2" :class="{ '!bg-green-200 !dark:bg-green-800': $store.state.doujin.safemode }" @click="ToggleSafeMode()">
            <ExclamationIcon class="icon"></ExclamationIcon>
            Safe Mode
          </a>
        </li>

        <li class="mx-4 mt-1">
          <a class="flex flex-row nav-button gap-x-2" :class="{ '!bg-green-200 !dark:bg-green-800': $store.state.doujin.vanillamode }" @click="Togglevanillamode()" >
            <SparklesIcon class="icon"></SparklesIcon>
            Vanilla Mode
          </a>
        </li>

        <li class="mx-4 mt-2">
          <h3
            class="text-xs font-semibold leading-4 tracking-wider text-gray-500 uppercase dark:text-gray-200"
          >
            Tags
          </h3>
          <div role="group" aria-labelledby="teams-headline" class="my-1 ml-1 space-y-1">
            <a
              v-for="(tag, i) in tags_health"
              :key="i"
              class="flex items-center px-3 py-2 text-sm font-medium leading-5 text-gray-700 transition duration-150 ease-in-out rounded-md dark:text-gray-300 group hover:text-gray-900 hover:bg-gray-50 dark:hover:bg-gray-700 focus:outline-none"
              ><span :class="`w-2.5 h-2.5 mr-4 rounded-full bg-${tag.color}-500`"></span
              ><span class="truncate">{{ tag.name }}</span></a
            >
          </div>
        </li>

      </ul>
    </nav>
      <div class="blacklight" :class="open ? 'navbar-open' : 'navbar-close'"></div>
  </div>
</template>

<script>
import {
  SunIcon,
  ExclamationIcon,
  ArchiveIcon,
  HomeIcon,
  SparklesIcon,
} from "@vue-hero-icons/outline";

export default {
  components: {
    SunIcon,
    ExclamationIcon,
    ArchiveIcon,
    HomeIcon,
    SparklesIcon,
  },
  data() {
    return {
      open: false,
      query: "",
      colors: this.$store.state.dounav.colors,
      cur_color: this.colortoInt(),
      tags_health: this.$store.state.dounav.tags_health,
    };
  },
  methods: {
    tog() {
      this.open = !this.open;
    },
    goToSearchPage() {
      if (this.query === "") {
        this.$router.push({ name: "index", params: { query: this.query } });
      } else {
        this.$router.push({
          name: "search-query",
          params: { query: this.query },
        });
      };
    },
    Setcolor() {
      this.cur_color += 1;
      if (this.cur_color === 3) {
        this.cur_color = 0;
      };
      this.$colorMode.preference = this.colors[this.cur_color].toLowerCase();
    },
    Togglevanillamode() {
      this.$store.commit("doujin/tvanillamode");
    },
    ToggleSafeMode() {
      this.$store.commit('doujin/tsafemode')
    },
    colortoInt() {
      const w = this.$colorMode.preference;
      if (w === "light") {
        return 0;
      };
      if (w === "dark") {
        return 1;
      };
      if (w === "system") {
        return 2;
      };
    },
  },
};
</script>

<style>
input.checked ~ .dot {
  transform: translateX(100%);
  background-color: #48bb78;
}

.navbar {
  transition: all 0.3s ease;
  right: 0;
}

.navbar-open {
  transform: translateX(0%);
}
.navbar-close {
  transform: translateX(100%);
}

input.checked ~ .dot {
  transform: translateX(100%);
  background-color: #48bb78;
}

.icon {
  @apply w-6 h-6 mr-3 text-gray-400 transition duration-150 ease-in-out dark:text-gray-100 group-hover:text-gray-500 group-focus:text-gray-600;
}

.nav-button {
  @apply flex items-center px-2 py-2 text-sm font-medium leading-5 text-gray-700 transition duration-150 ease-in-out rounded-md cursor-pointer dark:text-gray-100 group focus:outline-none focus:bg-gray-50 hover:text-gray-900 hover:bg-gray-50 dark:hover:bg-gray-700;
}

.blacklight {
  position: absolute;
  background: black;
  opacity: 0.5;
  width: 20000px;
  height: 20000px;
  top: -8000px;
  right: -8000px;
}
</style>