<template>
  <div class=""> 
      <h2 class="mb-4 text-6xl tracking-tight font-extrabold text-center xl:mb-24">Contact Me</h2>
      <div class="lg:flex justify-evenly items-center py-8 lg:py-2 px-4 ">
        <section class="py-8 lg:py-16 px-4 mx-10">
          <div> 
            <h3 class="text-2xl xl:text-4xl text-center pb-8 text-teal-200">Feel free to contact me at</h3>
            <h3 class="text-xl xl:text-3xl pb-8"><i class="ri-mail-fill ri-lg"></i>&nbsp;&nbsp;Briandlara1@gmail.com</h3>
            <a href="https://github.com/BrianDLara">
              <h3 class="text-xl xl:text-3xl pb-8 hover:text-gray-400"><i class="ri-github-fill ri-lg github-icon"></i>&nbsp;&nbsp;Github</h3>
            </a>
            <a href="https://www.linkedin.com/in/brian-lara/">
              <h3 class="text-xl xl:text-3xl pb-8 hover:text-gray-400"><i class="ri-linkedin-box-fill ri-lg linkedin-icon"></i>&nbsp;&nbsp;LinkedIn</h3>
            </a>
          </div>
        </section>

        <section class="">
          <div class="xl:hidden">
            <p class="mt-4 text-center text-xl text-teal-200">Otherwise</p>
            <p class="mb-8 lg:mb-16 text-center text-xl text-teal-200">Please fill out the form below to send me a direct e-mail.</p>
          </div>
          
          <form ref="form" @submit.prevent="sendEmail" class="space-y-8 xl:text-3xl mx-4">
            <!-- Name -->
            <div>
              <label class="block mb-2 text-xl xl:text-3xl font-medium">Your Name</label>
              <input 
              type="text" 
              name="from_name" 
              class="text-black block p-3 w-full text-xl xl:text-3xl bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500" 
              required>
            </div>
            <!-- email -->
            <div>
              <label class="block mb-2 text-xl xl:text-3xl font-medium">Your email</label>
              <input 
              type="email" 
              name="email_id" 
              class="text-black shadow-sm bg-gray-50 border border-gray-300 text-xl xl:text-3xl rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5" 
              required>
            </div>
            <!-- message -->
            <div class="sm:col-span-2">
              <label class="block mb-2 text-xl xl:text-3xl font-medium">Your message</label>
              <textarea 
              name="message" 
              rows="6" 
              class="text-black block p-2.5 w-full text-xl xl:text-3xl text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" 
              >
              </textarea>
            </div>
            <button value="Send" type="submit" class="py-3 px-5 text-xl xl:text-3xl font-medium text-center text-white rounded-lg bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br sm:w-fit focus:ring-4 focus:outline-none focus:ring-primary-300 flex justify-center items-center">Send message</button>
          </form>
        </section>
    </div>
  </div>
</template>
  
  
  <script>
  import emailjs from '@emailjs/browser';
  import { createToast } from 'mosha-vue-toastify';
  import 'mosha-vue-toastify/dist/style.css'
  export default {
    name: 'ContactMe',
    methods: {          
      sendEmail(){
        emailjs.sendForm('service_3e9fn5v', 'template_76fi0up', this.$refs.form, 't7Q7gEBgT9k0_k2_D').then((result) => {
          createToast('Form Sent!',
            {
            position: 'top-right',
            type: 'success',
            showIcon: 'true',
            transition: 'zoom',
            toastBackgroundColor: '#1a8755',
            })
          console.log('SUCCESS!', result.status, result.text);
          this.$refs.form.reset();
        },
        (error) => {
          createToast('Failed to send. Please try again.',
            {
            position: 'top-right',
            type: 'danger',
            showIcon: 'true',
            transition: 'zoom',
            toastBackgroundColor: '#dc3545',
            })
          console.log('FAILED...', error.text);
          this.$refs.form.reset();
        });
      },
    },
  }
  </script>
  