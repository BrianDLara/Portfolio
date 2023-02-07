  <template>
    <main id="home">
      <section class="flex flex-col xl:flex-row justify-evenly items-center pt-10 xl:pt-24">
        <div class="flex flex-col mx-6 p-2  xl:mx-16 xl:p-8 ">
          <img src="https://i.imgur.com/5Pdis9B.png" alt="name" class="name-image hoverZoom">
          <p class="text-secondary-color italic font-extrabold pb-4 pt-8 text-3xl">Software Developer</p>
          <p class="text-xl">I’m a full-stack developer, with an endless creative mind and a passion for building products from scratch.</p>
        </div>
        
        <img src="https://i.imgur.com/ol6M0Im.jpg" alt="profile image" class="profile-image hoverZoom">
              
      </section>
      <section>
        <p class="xl:text-xl xl:px-8 mx-8 xl:mx-36 mt-16 xl:mt-24">I have learned that maximizing the limited time we have is crucial. Personally, acquiring U.S Citizenship ranks high among my life's proudest accomplishments. This milestone has opened up a world of possibilities and enabled me to chase my dreams and passions.</p>
        <!-- <img src="https://i.imgur.com/3hhfbsg.png" alt="text divider" class="divider"> -->
        
        <p class="xl:text-xl xl:px-8 mx-8 xl:mx-36 mt-8">My previous career as a Commercial Roofing Foreman, allowed me to develop my problem-solving skills. This job did not only teach me how to work collaboratively with teams, but also how to lead them through high quality projects in deadline-driven environments.</p>
        <!-- <img src="https://i.imgur.com/3hhfbsg.png" alt="text divider" class="divider"> -->

        <p class="xl:text-xl xl:px-8 mx-8 xl:mx-36 mt-8">When I'm not working, I spend all my time with my family. I have a great time baking with my daughter and can't wait until she's old enough to join me on many hiking adventures.</p>

        <p class="xl:text-xl xl:px-8 mx-8 xl:mx-36 mt-8"> I am excited to combine my technical and people skills to help companies and their engineering teams succeed.</p>
        <img src="https://i.imgur.com/3hhfbsg.png" alt="text divider" class="divider">

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
      <footer>
        <PageFooter />
      </footer>
    </main>
  </template>
  
  <script>
  import MyExperience from './MyExperience.vue'
  import UserProjects from './UserProjects.vue';
  import ContactMe from './ContactMe.vue';
  import PageFooter from '../components/PageFooter.vue'
   export default{
      name: 'HomePage',
      components: {
        MyExperience,
        UserProjects,
        ContactMe,
        PageFooter
      },
      
    }
  </script>
  