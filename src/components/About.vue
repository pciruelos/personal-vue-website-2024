<template>
  <div name="aboutme" class=" bg-black w-full">
    <!-- Aboutme header -->
    <p class="boxSizeCustom mx-auto text-center px-10 font-bold py-2 text-xl font-sans text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-purple-600">My History</p>
    <h1 class="text-center px-10 text-4xl pb-8 underline underline-offset-4 text-white font-bold font-sans italic text-shadow-white">
      About Me
    </h1>
    <!-- Aboutme content -->
    <div class="grid gap-4 md:grid-cols-2 pl-10 pr-10 max-w-[1400px] mx-auto">
      <div class="flex items-center justify-center">
        <img
          src="../assets/pablociruelos_working2.png"
          alt="Pablo Ciruelos"
        />
      </div>
      <div class="flex items-center">
        <div>
          <!-- <h1 class="md:text-center text-5xl font-bold pb-5 text-purple-600">
            I'm Pablo Ciruelos
          </h1> -->
          <p class="md:text-center text-xl text-purple-600">
            Mid-Senior Full Stack Developer, specializing in
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
    <p class="pt-20 boxSizeCustom mx-auto text-center text-xl italic font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-purple-600">Main Stack and Competences</p>
    <h1 class="text-center text-4xl m-5 underline underline-offset-4 text-white font-bold font-sans italic">
      Skills:
    </h1>
    <!-- Skills content -->
    <div class="grid gap-4 md:grid-cols-3 pl-10 pr-10 items-center text-center font-sans">
  <div class="max-w-md mx-auto">
    <img src="../assets/vue2_pablociruelos.png" class="hover:scale-125 duration-500" alt="vue js" />
  </div>
  <div>
    <p class="md:text-center text-xl text-green-400">
      As I mentioned before, my specialization lies in Vue.js 2/3, utilizing both the Composition API and Options API, along with Pinia/Vuex, and Vue Router (including Nuxt). I have hands-on experience integrating Vue.js applications with backend systems built in C# .NET using Web API, repository pattern architecture, DTOs, and adhering to clean code principles.
      <br /><br />
      In addition to Vue.js and TypeScript, I have experience with various other frameworks and libraries, such as Node.js, as well as React, Angular, and Svelte for front-end development.
      <br /><br />
    </p>
  </div>
  <div class="max-w-md mx-auto">
    <img src="../assets/csharp_pablociruelos.png" class="hover:scale-125 duration-500" alt="c# .net core" />
  </div>
</div>
<div class="flex justify-center space-x-4 py-10">
  <img src="../assets/logos/node.png" class="w-12 h-12" alt="Icon 1" />
  <img src="../assets/logos/react.png" class="w-12 h-12" alt="Icon 2" />
  <img src="../assets/logos/angular.png" class="w-12 h-12" alt="Icon 9" />
  <img src="../assets/logos/js.png" class="w-12 h-12" alt="Icon 3" />
  <img src="../assets/logos/ts.png" class="w-12 h-12" alt="Icon 4" />
  <img src="../assets/logos/mongo.png" class="w-12 h-12" alt="Icon 5" />
  <img src="../assets/logos/tailwind.png" class="w-12 h-12" alt="Icon 13" />
  <img src="../assets/logos/next.png" class="w-12 h-12" alt="Icon 6" />
  <img src="../assets/logos/golang.png" class="w-12 h-12" alt="Icon 7" />
  <img src="../assets/logos/docker.png" class="w-12 h-12" alt="Icon 10" />
  <img src="../assets/logos/bootstrap.png" class="w-12 h-12" alt="Icon 11" />
  <img src="../assets/logos/postgressql.png" class="w-12 h-12" alt="Icon 12" />
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
