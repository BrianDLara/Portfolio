<template>
  <nav class=" flex flex-col justify-evenly items-center  text-center">
      <!-- Profile Image -->
      
        <img src="https://i.imgur.com/57D61NA.png" alt="Profile Logo" class="nav-logo">
        <img src="https://i.imgur.com/KEH6CjU.png" alt="Profile Picture" class="nav-pic">
       
        
      
      <!-- User Title -->
      <!-- <div class="">
        <p class="font-black text-4xl my-1 py-1">Brian Lara</p>
        <p class="font-md text-2xl">Software Engineer</p>
      </div> -->

      <!-- User Header Text -->
     
       
      
      
      <!-- Nav Links -->
      <div class="flex flex-col"> 
        <div class="text-2xl flex justify-between gap-14">
          <div class="flex flex-col  mt-4">
            <router-link :to="{path: '/', hash: '#home'}" class="block text-teal-200 hover:text-white">Home</router-link>
            <router-link :to="{path: '/', hash: '#projects'}" class="block  mt-8 text-teal-200 hover:text-white">Projects</router-link>
          </div>
          <div class="flex flex-col  mt-4">
            <router-link :to="{path: '/', hash: '#experience'}" class="block text-teal-200 hover:text-white">My Experience</router-link>
            <router-link :to="{path: '/', hash: '#contact'}" class="block  mt-8 text-teal-200 hover:text-white">Contact Me</router-link>
          </div>  
        </div>
      </div>
      <!-- Download Resume Button -->
      <div> 
        <a href="/resume.pdf" download="BrianLara-resume" class="inline-block text-lg px-8 py-4 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white  ">Download Resume</a>
      </div>
      
      <!-- social links -->
      <div class="flex flex-col justify-center items-center">
        <p class="text-2xl">Follow Me</p>
        <div class="flex">
          <a href="https://github.com/BrianDLara"><i class="ri-github-fill ri-3x github-icon mx-2"></i></a>           
          <a href="https://www.linkedin.com/in/brian-lara/"><i class="ri-linkedin-box-fill ri-3x linkedin-icon mx-2"></i></a> 
        </div>  
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
  
  