<template>
  <div
    class="pt-10 bg-gradient-to-b from-black via-gray-500 to-white w-full md:h-fit text-white font-sans"
    name="project"
  >
    <div class="pb-8">
      <p class="text-center px-10 font-bold py-2 text-blue-500 text-shadow">
        Some previous and present works
      </p>
      <h1
        class="italic text-center px-10 text-4xl pb-16 underline underline-offset-4 text-white font-bold text-shadow"
      >
        Portfolio Projects
      </h1>
    </div>
    <div class="max-w-[1500px] mx-auto px-4 pb-16 flex flex-col w-full">
      <!-- Increased spacing below the title -->
      <vue-marquee-slider :speed="22500" id="sliderOne" :width="400">
        <PortofolioItem
          v-for="project in projects"
          :key="project.id"
          :project="project"
          class="custom-portfolio-item"
        />
      </vue-marquee-slider>
    </div>
    <div class="pb-16 flex justify-center">
      <!-- Increased spacing above the button -->
      <button
        class="hoverEffect rounded-lg group text-white px-6 py-3 my-2 flex items-center bg-gradient-to-r from-green-400 to-purple-600"
      >
        <a href="https://github.com/pciruelos">More Projects</a>
      </button>
    </div>
  </div>
</template>

<script setup>
import PortofolioItem from "./PortofolioItem.vue";
import { projects } from "../static/data.js";
import { VueMarqueeSlider } from "vue3-marquee-slider";
import "../../node_modules/vue3-marquee-slider/dist/style.css";
</script>

<style scoped>
.hoverEffect {
  transition: all 0.3s ease;
}

.hoverEffect:hover {
  background: linear-gradient(to right, #00b170, #47008a);
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
}

/* Increased height for the portfolio items */
.custom-portfolio-item {
  width: 200px; /* Keep the item width consistent */
  height: 200px; /* Adjust height for better proportions */
  margin: 0 15px; /* Spacing between items */
}
</style>
