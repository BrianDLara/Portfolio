<template>
  <div class="">
    <h1 class="text-center text-5xl my-2 py-2 px-4 mb-24">My Experience</h1>
    <div class="flex flex-col lg:flex-row justify-center items-center mb-6 lg:mb-24 ">
      <!-- Frontend container -->
      <div class="flex flex-col border rounded mx-16 px-6 lg:px-10 py-16 mb-16 bg-neutral-900">
        <h1 class="text-center text-2xl mb-6">Frontend</h1>
        
        <div class="flex">
          <!-- Frontend column 1 -->
          <div class="px-6 lg:px-10 text-sm lg:text-2xl">
            <div class="flex items-center py-6">
              <img class="devicon-devicon-plain" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" />
              <p class="pl-3">HTML</p>
            </div>
            <div class="flex  items-center py-6">
              <img class="devicon-devicon-plain" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg" />
              <p class="pl-3">CSS</p>
            </div>
            <div class="flex  items-center py-6">
              <img class="devicon-devicon-plain" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" />
              <p class="pl-3">Javascript</p>
            </div>
            <div class="flex  items-center py-6">
              <img class="devicon-devicon-plain" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" />
              <p class="pl-3">React</p>
            </div>
          </div>
          <!-- Frontend column 2 -->  
          <div class="px-6 lg:px-10 text-sm lg:text-2xl"> 
            <div class="flex items-center py-6">
              <img class="devicon-devicon-plain" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg" />
              <p class="pl-3">Vue</p>
            </div>
            <div class="flex items-center py-6">
              <img class="devicon-devicon-plain" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" />
              <p class="pl-3">Bootstrap</p>
            </div>
            <div class="flex items-center py-6">
              <img class="devicon-devicon-plain" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg" />
              <p class="pl-3">Tailwind</p>
            </div>
          </div>
        </div>
      </div>
            
            
            
            <!-- Backend container -->
          <div class="flex flex-col border rounded mx-16 px-6 lg:px-10 py-16 mb-16 bg-neutral-900"> 
            <h1 class="text-center text-2xl mb-6">Backend</h1>
            <div class="flex"> 
              <!-- Backend Column 1 -->
              <div class="px-6 lg:px-10 text-sm lg:text-2xl">
                <div class="flex items-center py-6">
                  <img class="devicon-devicon-plain" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" />
                  <p class="pl-3">Node</p>
                </div>
                <div class="flex  items-center py-6">
                  <img class="devicon-devicon-plain" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sequelize/sequelize-original.svg" />
                  <p class="pl-3">Sequelize</p>
                </div>
                <div class="flex  items-center py-6">
                  <img class="devicon-devicon-plain" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" />
                  <p class="pl-3">MongoDB</p>
                </div>
                <div class="flex items-center py-6">
                  <img class="white-logo devicon-devicon-plain" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" />
                  <p class="pl-3">Express</p>
                </div>
              </div>
              <!-- Backend Column 2 -->  
              <div class="px-6 lg:px-10 text-sm lg:text-2xl"> 
                <div class="flex items-center py-6">
                  <img class="devicon-devicon-plain" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" />
                  <p class="pl-3">postgreSQL</p>
                </div>
                <div class="flex items-center py-6">
                  <img class="devicon-devicon-plain" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" />
                  <p class="pl-3">Python</p>
                </div>
                <div class="flex items-center py-6">
                  <img class="white-logo devicon-devicon-plain" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg" />
                  <p class="pl-3">Flask</p>
                </div>
              </div>
            </div>
          </div>
      </div>
    </div>

  </template>
  
  <script>
  
   export default {
      name: 'MyExperience'
    }
  </script>
  