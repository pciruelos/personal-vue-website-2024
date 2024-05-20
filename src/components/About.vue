<template>
  <div name="aboutme" class=" bg-black w-full">
    <!-- Aboutme header -->
    <p class="boxSizeCustom mx-auto text-center px-10 font-bold py-2 text-xl font-sans text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-purple-600">My History</p>
    <h1 class="text-center px-10 text-4xl pb-8 underline underline-offset-4 text-white font-bold font-sans italic text-shadow-white">
      About Me
    </h1>
    <!-- Aboutme content -->
    <div class="grid gap-4 md:grid-cols-2 pl-10 pr-10 max-w-[1400px] mx-auto">
      <img
        src="../assets/pablociruelos_working2.png"
        alt="Pablo Ciruelos"
        style="width: 500px"
      />
      <div class="flex items-center">
        <div>
          <!-- <h1 class="md:text-center text-5xl font-bold pb-5 text-purple-600">
            I'm Pablo Ciruelos
          </h1> -->
          <p class="md:text-center text-xl text-purple-600">
            Mid-Senior Full Stack Developer based in Copenhagen, specializing in
            Vue.js and C# .NET Core. My career began in Argentina, enriching my
            background with extensive experience in developing web applications.
            Fluent in both Spanish and English, I excel in international
            environments, enhancing collaboration across global teams.
            <br /><br />
            With more than five years of experience, I have honed my skills in a
            range of technologies, designing, developing, and optimizing complex
            web solutions including Single Page Applications (SPA),Enterprise
            applications(CRM), E-commerce solutions (B2B), Content management
            systems(CMS), mobile applications and more. My technical prowess
            extends to maintaining robust codebases and swiftly identifying and
            rectifying bugs to improve functionality and user experience.
            <br /><br />
            Outside of work, my pursuits in climbing, drawing, and drumming
            enrich my creativity and personal growth, reflecting my commitment
            to continuous learning and professional excellence."
          </p>
        </div>
      </div>
    </div>
    <!-- Skills header -->
    <p class="boxSizeCustom mx-auto pt-10 text-center text-xl italic font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-purple-600">Main Stack and Competences</p>
    <h1 class="text-center text-4xl m-5 underline underline-offset-4 text-white font-bold font-sans italic">
      Skills:
    </h1>
    <!-- Skills content -->
    <div class="grid gap-4 md:grid-cols-2 pl-10 pr-10 items-center text-center font-sans">
      <div class="max-w-md mx-auto">
        <img src="../assets/vue2_pablociruelos.png" class="hover:scale-125 duration-500" alt="vue js" />
      </div>
      <div class="max-w-md mx-auto">
        <img src="../assets/csharp_pablociruelos.png" class="hover:scale-125 duration-500" alt="c# .net core" />
      </div>
    </div>
  </div>
</template>

<script setup>
// Import statements or other script setup logic
</script>

<style scoped>
.boxSizeCustom {
  max-width: 350px;
}
</style>
