<template>
  <div
    name="project"
    class="bg-gray-500 w-full md:h-fit text-white font-sans"
    :style="{
      backgroundImage: `url(${Fondo})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
    }"
  >
    <!-- Section title -->
    <div>
      <p class="text-center px-10 font-bold py-2 text-blue-500 text-shadow">
        Some previous and present works
      </p>
      <h1
        class="italic text-center px-10 text-4xl pb-5 underline underline-offset-4 text-white font-bold text-shadow"
      >
        Portfolio Projects
      </h1>
    </div>
    <div class="max-w-[1500px] mx-auto p-4 pb-8 flex flex-col w-full">
      <vue-marquee-slider :speed="22500" id="sliderOne" :width="250">
        <PortofolioItem
          v-for="project in projects"
          :key="project.id"
          :project="project"
        />
      </vue-marquee-slider>
    </div>
    <div class="pb-5">
      <button
        class="rounded-lg group text-white px-6 py-3 my-2 flex items-center bg-gradient-to-r from-green-400 to-purple-600"
      >
        <a href="https://github.com/pciruelos">More Projects</a>
      </button>
    </div>
  </div>
</template>

<script setup>
import PortofolioItem from "./PortofolioItem.vue";
import Fondo from "../assets/bakcground_2_pablociruelos.jpg";
import { projects } from "../static/data.js";
import { VueMarqueeSlider } from "vue3-marquee-slider";
import "../../node_modules/vue3-marquee-slider/dist/style.css";
</script>

<style scoped>
/* Add your component specific styles here */
</style>
