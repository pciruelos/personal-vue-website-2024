<template>
<transition name="fade">
  <nav v-show="isVisible" class="fixed w-full h-[60px] flex justify-between items-center px-4 bg-gradient-to-r from-green-400 to-purple-600 text-black">
    <div>
      <img src="../assets/random_icon_pablociruelos.png" alt="Pablo Ciruelos" style="width: 100px;">
    </div>

    <div class="hidden md:flex">
      <ul class="hidden md:flex font-medium font-sans text-white">
        <li class="p-1"><a href="#home">Home</a></li>
        <li class="p-1"><a href="#aboutme">About Me</a></li>
        <li class="p-1"><a href="#project">Portfolio</a></li>
        <li class="p-1"><a href="#contact">Contact</a></li>
      </ul>
    </div>

    <div @click="toggleNavbar" class="md:hidden z-10">
      <span v-if="!isNavbarOpen">+</span>
      <span v-else>×</span>
    </div>

    <ul v-if="isNavbarOpen" class="absolute top-0 left-0 w-full h-screen bg-gradient-to-r from-green-400 to-purple-600 flex flex-col justify-center items-center font-sans font-bold">
      <li class="py-6 text-4xl"><a @click="toggleNavbar" href="#home">Home</a></li>
      <li class="py-6 text-4xl"><a @click="toggleNavbar" href="#aboutme">About Me</a></li>
      <li class="py-6 text-4xl"><a @click="toggleNavbar" href="#project">Portfolio</a></li>
      <li class="py-6 text-4xl"><a @click="toggleNavbar" href="#contact">Contact</a></li>
    </ul>
  </nav>
</transition>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const isNavbarOpen = ref(false)
const isVisible = ref(false)

function toggleNavbar() {
  isNavbarOpen.value = !isNavbarOpen.value
}

function handleScroll() {
  const scrollThreshold = 100 // Change this to the desired scroll threshold in pixels
  isVisible.value = window.scrollY > scrollThreshold
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s, transform 0.5s;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
  transform: translateY(-50px);
}
.fade-enter-to, .fade-leave-from {
  opacity: 1;
  transform: translateY(0);
}
</style>
