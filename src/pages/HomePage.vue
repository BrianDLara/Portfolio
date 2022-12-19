  <template>
    <main id="home">
      <section class="flex flex-col xl:flex-row justify-evenly items-center pt-10 xl:pt-24">
        <div class="flex flex-col mx-6 p-2  xl:mx-16 xl:p-8 ">
          <img src="https://i.imgur.com/5Pdis9B.png" alt="name" class="name-image">
          <p class="pb-4 pt-8 text-3xl">Software Engineer</p>
          <p class="text-xl">I’m a full-stack developer, with an endless creative mind and a passion for building products from scratch.</p>
        </div>
        
        <img src="https://i.imgur.com/ol6M0Im.jpg" alt="profile image" class="profile-image">
              
      </section>
        
      <section id="experience">
        <MyExperience />
      </section>
      <section id="projects" class=" py-32">
        <UserProjects />
      </section>
      <section id="contact">
        <ContactMe />
      </section>
    </main>
  </template>
  
  <script>
  import MyExperience from './MyExperience.vue'
  import UserProjects from './UserProjects.vue';
  import ContactMe from './ContactMe.vue';
   export default{
      name: 'HomePage',
      components: {
        MyExperience,
        UserProjects,
        ContactMe
      },
      
    }
  </script>
  