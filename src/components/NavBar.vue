<template>
  <nav class="flex flex-col justify-evenly items-center  text-center">
      <!-- Profile Image -->
      <div class="profile-pic-container ">
        <img src="https://i.imgur.com/wqjfnKZ.jpg" alt="Profile Picture" class="profile-pic">
      </div>
      <!-- User Title -->
      <div>
        <p class="font-black text-4xl">Brian Lara</p>
        <p class="font-md text-2xl">Software Engineer</p>
      </div>

      <!-- User Header Text -->
      <div>
        <p class="header-text leading-relaxed mx-10">I’m a full-stack developer, with an endless creative mind and a passion for building products from scratch.</p>
      </div>
      <!-- Nav Links -->
      <div class="flex flex-col"> 
        <div class="text-lg flex justify-between gap-14">
          <div class="flex flex-col  mt-4">
            <router-link to="/" class="block text-teal-200 hover:text-white">Home</router-link>
            <router-link to="/projects" class="block  mt-4 text-teal-200 hover:text-white">Projects</router-link>
          </div>
          <div class="flex flex-col  mt-4">
            <router-link to="/about" class="block text-teal-200 hover:text-white">About Me</router-link>
            <router-link to="/resume" class="block mt-4 text-teal-200 hover:text-white">Resume</router-link>
          </div>  
        </div>
        <router-link to="/contact" class="block text-2xl mt-8  text-teal-200 hover:text-white">Contact Me</router-link>
      </div>
      <!-- Download Resume Button -->
      <div>
        <a href="#" class="inline-block text-lg px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white  ">Download Resume</a>
      </div>
</nav>
</template>

<script>
    export default {
      name: 'NavBar'
    }

  </script>
  
  