<template>
  <div name="home" class="w-full h-screen bg-gray-400" :style="{ backgroundImage: `url(${Fondo})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }">
    <div class="max-w-[1000px] mx-auto px-8 flex flex-col justify-center items-center h-full text-center">
      <p class="text-white font-bold font-sans text-shadow">Hi! Welcome, I'm</p>
      <h1 class="text-4xl sm:text-9xl font-sans font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-purple-600 whitespace-nowrap overflow-hidden ">
        Pablo Ciruelos
      </h1>
      <h2 class="text-2xl sm:text-6xl font-bold text-white text-shadow">Full Stack Developer</h2>
      <p class="pt-5 text-xl italic font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-purple-600">
        "where creativity & passion meets coding"
      </p>
      <div class="pt-5">
        <button @click="goToAboutMe" class="rounded-lg group text-white px-6 py-3 my-2 flex items-center bg-gradient-to-r from-green-400 to-purple-600">
          Go Check!
          <span class="group-hover:rotate-90 duration-300">
          </span>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import Fondo from '../assets/background_pablociruelos.jpg';

const goToAboutMe = () => {
  alert('Hola');
}
</script>

<style scoped>

</style>
