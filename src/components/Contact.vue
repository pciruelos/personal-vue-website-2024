  <template>
    <div name="contact" class="w-full md:h-[575px] bg-black flex flex-col justify-center items-center">
      <!-- Contact header -->
      <p class="text-center text-xl italic font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-purple-600 pb-5">Feel free to write me :)</p>
      <h1 class="text-center px-10 text-4xl pb-8 underline underline-offset-4 text-white font-bold font-sans italic">Contact Info</h1>

      <!-- Contact content -->
      <div class="flex-col items-center md:max-w-[700px] w-full">

        <div class="flex justify-center flex-shrink-0 pb-3">
          <img src="../assets/pablociruelosprofile.png" alt="Profile Image" class="profilePicSize rounded-full">
        </div>

        <div class="flex justify-evenly text-white pt-5">

            <v-icon scale="3" name="fa-github" class="iconSize hover:scale-125 duration-900 hover:text-white" @click="goToLink('https://github.com/pciruelos')" />
            <v-icon scale="3" name="fa-linkedin" class="iconSize hover:scale-125 duration-900 hover:text-white" @click="goToLink('https://www.linkedin.com/in/pablociruelos/')" />
            <v-icon scale="3" name="fa-youtube" class="iconSize hover:scale-125 duration-900 hover:text-white" @click="goToLink('https://www.youtube.com/c/luppo2007')" />
            <v-icon scale="3" name="fa-behance" class="iconSize hover:scale-125 duration-900 hover:text-white" @click="goToLink('https://www.behance.net/elchicoprodigio')" />
            <v-icon scale="3" name="fa-envelope" class="iconSize hover:scale-125 duration-900 hover:text-white" @click="goToLink('mailto:pablo.ciruelos@gmail.com')" />

        </div>
      </div>

      <!-- Thank you message -->
      <div class="text-center px-10 pt-10 pb-10">
        <h1 class="text-center text-xl italic font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-purple-600">That's all, thanks for passing by! Have a good one!</h1>
        <!-- <h1 class="text-2xl hover:rotate-180 duration-1000 pt-2">Ciru@2022</h1> -->
      </div>
    </div>
  </template>

  <script setup>
  const goToLink = (link) => {
    window.open(link, '_blank');
  };
  </script>

  <style scoped>
  .profilePicSize {
    width: 200px;
    height: 200px;
  }
  </style>
