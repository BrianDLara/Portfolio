<template>
  <nav class=" flex flex-col justify-evenly items-center  text-center">
      <!-- Profile Image -->
      <div class="profile-pic-container blob">
        <img src="https://i.imgur.com/wqjfnKZ.jpg" alt="Profile Picture" class="profile-pic">
      </div>
      <!-- User Title -->
      <div class="">
        <p class="font-black text-4xl my-1 py-1">Brian Lara</p>
        <p class="font-md text-2xl">Software Engineer</p>
      </div>

      <!-- User Header Text -->
      <div>
        <p class="header-text leading-relaxed mx-10 text-xl">I’m a full-stack developer, with an endless creative mind and a passion for building products from scratch.</p>
      </div>
      <!-- Nav Links -->
      <div class="flex flex-col"> 
        <div class="text-2xl flex justify-between gap-14">
          <div class="flex flex-col  mt-4">
            <router-link :to="{path: '/', hash: '#home'}" class="block text-teal-200 hover:text-white">Home</router-link>
            <router-link :to="{path: '/', hash: '#projects'}" class="block  mt-4 text-teal-200 hover:text-white">Projects</router-link>
          </div>
          <div class="flex flex-col  mt-4">
            <router-link :to="{path: '/', hash: '#about'}" class="block text-teal-200 hover:text-white">About Me</router-link>
            <router-link :to="{path: '/', hash: '#contact'}" class="block  mt-4 text-teal-200 hover:text-white">Contact Me</router-link>
          </div>  
        </div>
      </div>
      <!-- Download Resume Button -->
      <div>
       
        <a href="https://docs.google.com/document/d/12K0ch0tqu2HfHSUHRCTIhMvtsOtTrPcAOuJunptrpzc/edit?usp=sharing"  target="_blank" class="inline-block text-lg px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white  ">View Resume</a>
      </div>
  </nav>
</template>


<script>

    export default {
      name: 'NavBar',
      data: () => ({
      
      }),
      methods : {
        // log(msg){
        //   console.log(msg); 
        // }
      //   clickedDownload(){
      //   const link = document.createElement('a');
      // link.href = 'https://docs.google.com/document/d/e/2PACX-1vSxLTd-ZBYdrt4gxtyXPS8pTpYT_plcP3kuk8SRunH0M9ebcOd5p27O5-1U_MQkrv5V3Eb60gHgEhow/pub';
      // link.setAttribute('download', 'resume.docx'); //or any other extension
      // document.body.appendChild(link);
      // link.click();
    // }
      }
    }

  </script>
  
  