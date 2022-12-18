<template>
  <div class="flex flex-col items-center justify-center text-center"> 

    <section class="py-8 lg:py-16 px-4">
      <div> 
        <h3 class="text-xl pb-4"><i class="ri-mail-fill text-xl"></i>&nbsp;&nbsp;Briandlara1@gmail.com</h3>
        <h3 class="text-xl pb-4"><i class="ri-github-fill ri-lg"></i>&nbsp;&nbsp;Github</h3>
        <h3 class="text-xl pb-4"><i class="ri-linkedin-box-fill ri-lg"></i>&nbsp;&nbsp;LinkedIn</h3>
      </div>
    </section>
    <section>
      <div class="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
        <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-center">Contact Me</h2>
        <p class="mb-8 lg:mb-16 font-light text-center sm:text-xl">Please fill out the form to send me a direct e-mail.</p>
        <form action="#" class="space-y-8">
          <div>
            <label for="email" class="block mb-2 text-sm font-medium">Your email</label>
            <input 
            type="email" 
            id="email" 
            class="shadow-sm bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5" 
            required>
          </div>
        <div>
          <label for="subject" class="block mb-2 text-sm font-medium">Subject</label>
          <input 
          type="text" 
          id="subject" 
          class="block p-3 w-full text-sm bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500" 
          required>
        </div>
        <div class="sm:col-span-2">
          <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Your message</label>
          <textarea 
          id="message" 
          rows="6" 
          class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" 
          >
        </textarea>
      </div>
      <button type="submit" class="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br sm:w-fit focus:ring-4 focus:outline-none focus:ring-primary-300">Send message</button>
    </form>
  </div>
  </section>
</div>
</template>
  
  
  <script>
   export default {
      name: 'ContactMe'
    }
  </script>
  