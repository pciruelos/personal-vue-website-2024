<template>
  <div class="shadow-lg shadow-black group container rounded-md flex justify-center items-center mx-auto content-div" :style="{ backgroundImage: `url(${project.img})` }">
    <div class="opacity-0 group-hover:opacity-100">
      <span class="text-2xl font-bold text-white tracking-wider">{{ project.title }}</span>
      <div class="pt-8 text-center flex justify-around">
        <a :href="project.demo">
          <button class="text-center rounded-lg px-6 py-3 m-2 bg-blue-500 text-white font-bold text-lg">Demo</button>
        </a>
        <a :href="project.github">
          <button class="text-center rounded-lg px-6 py-3 m-2 bg-blue-500 text-white font-bold text-lg">Github</button>
        </a>
      </div>  
    </div>
  </div>
</template>

<script setup>
import { defineProps } from "vue";
defineProps({
  project: {
    type: Object,
    required: true,
  },
});
</script>