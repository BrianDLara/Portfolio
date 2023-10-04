  <template>
    <main id="home">
      <section class="flex flex-col xl:flex-row justify-evenly items-center pt-10 xl:pt-24">
        <div class="flex flex-col mx-6 p-2  xl:mx-16 xl:p-8 ">
          <img src="https://i.imgur.com/5Pdis9B.png" alt="name" class="name-image hoverZoom">
          <p class="text-secondary-color italic font-extrabold pb-4 pt-8 text-3xl">Software Engineer</p>
          <p class="text-xl">I’m a <span class="section-title">full-stack developer</span>, with an endless creative mind and a passion for building products from scratch.</p>
        </div>
        
        <img src="https://i.imgur.com/ol6M0Im.jpg" alt="profile image" class="profile-image hoverZoom">
              
      </section>
      <section>
        <p class="xl:text-xl xl:px-8 mx-8 xl:mx-36 mt-16 xl:mt-10">Every moment holds <span class="section-title">potential</span>, a lesson I've internalized throughout my journey. One of my most defining moments was acquiring U.S. Citizenship—a gateway that expanded horizons and set me on a path to pursue my deepest dreams and passions.</p>
        <div class="intro-image-container">
          <img src="https://i.imgur.com/wCZdd8j.jpg" alt="Brian Receiving his Citizenship" class="intro-image">
        </div>
        
        <p class="xl:text-xl xl:px-8 mx-8 xl:mx-36 mt-8">In my former role as a Commercial Roofing Foreman, I didn't just oversee tasks—I <span class="section-title">spearheaded</span> large teams on high priority projects for clients like Amazon, Google, Hartsfield Jackson Airport, and Georgia State University. This experience sharpened my problem-solving skills and fortified my ability to lead and collaborate, ensuring high-quality delivery even in the face of tight deadlines and unforeseen challenges.</p>

        <p class="xl:text-xl xl:px-8 mx-8 xl:mx-36 mt-8">When I'm not working, I spend all my time with my family. I have a great time baking with my daughter and can't wait until she's old enough to join me on many <span class="section-title">hiking</span> adventures.</p>
        <div class="intro-image-container">
          <img src="https://i.imgur.com/6KieDZn.jpg" alt="Brian Receiving his Citizenship" class="intro-image-3">
        </div>

        <p class="xl:text-xl xl:px-8 mx-8 xl:mx-36 mt-8"> Now, I'm diving headfirst into the tech industry, eager to integrate my technical skills and collaborative abilities to help companies and their engineering teams <span class="section-title">succeed</span>.</p>
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
  