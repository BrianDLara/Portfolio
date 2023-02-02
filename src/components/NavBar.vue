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
      <div class="flex flex-col md:px-6 xl:px-4"> 
        <div class="text-2xl flex justify-between items-center gap-14">
          <div class="flex flex-col  mt-4">
            <router-link :to="{path: '/', hash: '#home'}" class="hover-underline-animation nav-link text-secondary-color block hover:text-white">Home</router-link>
            <router-link :to="{path: '/', hash: '#projects'}" class="hover-underline-animation nav-link text-secondary-color block  mt-8  hover:text-white">Projects</router-link>
          </div>
          <div class="flex flex-col  mt-4">
            <router-link :to="{path: '/', hash: '#experience'}" class="hover-underline-animation nav-link text-secondary-color block  hover:text-white">My Experience</router-link>
            <router-link :to="{path: '/', hash: '#contact'}" class="hover-underline-animation nav-link text-secondary-color block  mt-8  hover:text-white">Contact Me</router-link>
          </div>  
        </div>
      </div>
      <!-- Download Resume Button -->
      <div> 
        <a href="https://drive.google.com/file/d/1EYg6IogVkUDQ6UtiJrHRbMwHhQ2i0tMj/view?usp=sharing" target="_blank" class="inline-block text-lg px-8 py-4 leading-none border rounded text-white border-white custom__button">View Resume</a>
      </div>
      
      <!-- animated text -->
      

      <!-- social links -->
      <div class="flex flex-col justify-center items-center">
        <p class="text-2xl">Follow Me</p>
        <div class="">
          <a href="https://github.com/BrianDLara" target="_blank"><i class="ri-github-fill ri-3x github-icon mx-2 hover:-translate-y-1"></i></a>           
          <a href="https://www.linkedin.com/in/brian-lara/" target="_blank"><i class="ri-linkedin-box-fill ri-3x linkedin-icon mx-2 hover:-translate-y-1"></i></a> 
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
  
  