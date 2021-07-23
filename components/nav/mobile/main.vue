<template>
  <div class="flex fixed w-full items-center px-6 h-16 gap-x-4 bg-gray-100 dark:bg-gray-600 z-index-10">
    <NuxtLink to="/">
      <p class="text-xl md:text-2xl font-bold text-gray-800 dark:text-gray-100">Sayuka</p>
    </NuxtLink>

    <p v-if="$store.state.doujin.safemode" class="font-bold text-green-500 dark:text-green-300 text-xs md:text-base pt-1">Safe mode ON</p>
    <p v-else class="font-bold text-red-500 dark:text-red-300 text-xs md:text-base pt-1">Safe mode OFF</p>
    <p v-if="$store.state.doujin.vanillamode" class="flex-grow font-bold text-green-500 dark:text-green-300 text-xs md:text-base pt-1">Vanilla Mode ON</p>
    <p v-else class="flex-grow font-bold text-red-500 dark:text-red-300 text-xs md:text-base pt-1">Vanilla Mode OFF</p>
      
    <div :class="open">
      <button class="text-black dark:text-white text-2xl p-2 font-bold outline-none" @click="tog()">&#9776;</button>
    </div>
    <nav
    :class="open ? 'navbar-open' : 'navbar-close'"
    class="navbar w-64 absolute overflow-x-scroll bg-gray-100 dark:bg-gray-600 top-0 h-screen"
    >
      <div class="flex pr-2 justify-end">
        <button class="p-2 text-white text-xl font-bold" @click="tog()">&#9747;</button>
      </div>
      <p class="text-2xl font-bold text-center text-gray-800 dark:text-gray-100">Menu</p>
      <div class="px-3 mt-6 mb-4">
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
      <ul class="list-none text-gray-800 dark:text-gray-100">

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
              <a class="nav-button flex flex-row gap-x-4">
                <HomeIcon class="icon"></HomeIcon>
                Home</a
              >
            </nuxt-link>

            <nuxt-link to="/history">
              <a class="nav-button flex flex-row gap-x-4">
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
          <a class="nav-button flex flex-row gap-x-2 ml-1" @click="Setcolor()">
            <SunIcon class="icon"></SunIcon>
            {{ colors[cur_color] }} Mode
          </a>
        </li>
        
        <li class="mx-4 mt-1">
          <a class="nav-button flex flex-row gap-x-2 ml-1" :class="{ '!bg-green-200 !dark:bg-green-800': $store.state.doujin.safemode }" @click="ToggleSafeMode()">
            <ExclamationIcon class="icon"></ExclamationIcon>
            Safe Mode
          </a>
        </li>

        <li class="mx-4 mt-1">
          <a class="nav-button flex flex-row gap-x-2 ml-1" :class="{ '!bg-green-200 !dark:bg-green-800': $store.state.doujin.vanillamode }" @click="Togglevanillamode()" >
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
          <div role="group" aria-labelledby="teams-headline" class="ml-2 mt-1 space-y-1">
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
      colors: ["Light", "Dark", "System"],
      cur_color: this.Colortoint(),
      tags_health: [
        {
          name: "Vanilla",
          color: "green",
        },
        {
          name: "Warning",
          color: "yellow",
        },
        {
          name: "Dangerous",
          color: "red",
        },
        {
          name: "Position",
          color: "pink",
        },
        {
          name: "Type",
          color: "indigo",
        },
        {
          name: "More tags",
          color: "gray",
        },
      ],
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
    Colortoint() {
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
  transition: all 330ms ease-out;
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
</style>