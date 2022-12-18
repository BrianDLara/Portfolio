  <template>
    <main id="home">
      <section class="mt-24">
        <img src="https://i.imgur.com/m0twePW.png" alt="funny error image" class="error-image">
      </section>
      <section>
        <MyExperience />
      </section>
      <section id="projects" class=" py-32">
        <UserProjects />
      </section>
      <section id="about">
        <AboutMe />
      </section>
      <section id="contact">
        <ContactMe />
      </section>
    </main>
  </template>
  
  <script>
  import MyExperience from './MyExperience.vue'
  import UserProjects from './UserProjects.vue';
  import AboutMe from './AboutMe.vue';
  import ContactMe from './ContactMe.vue';
   export default{
      name: 'HomePage',
      components: {
        MyExperience,
        UserProjects,
        AboutMe,
        ContactMe
      },
      
    }
  </script>
  