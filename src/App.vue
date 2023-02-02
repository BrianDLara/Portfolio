<template>

  <div class="md:flex max-w-full">
    <header class=" md:sticky top-0 header text-stone-50 w-screen md:w-2/5 lg:w-1/3 minimum-height h-screen flex justify-around">
        <NavBar />
    </header>
    <main class="main-background w-screen flex flex-col justify-center align-center">
      <RouterView></RouterView>
      <!-- Scroll up button -->
      <div ref="scrollTopButton" class="fixed flex justify-end bottom-0 right-0 pb-3 pr-5 transition">
          <div class="sticky-button">
              <button @click="scrollToTop" class="pt-2">
                <i class="ri-arrow-up-circle-fill ri-lg pt-2"></i>
                <p>Scroll to top</p>
              </button>
          </div>
      </div>
    </main>
  </div>
</template>

<script>
  import { defineComponent } from "vue";
  import NavBar from './components/NavBar.vue'
  export default defineComponent({
    name: 'App',
    components: {
      NavBar
    },
    mounted() {
      window.addEventListener("scroll", this.handleScroll);
    },
    beforeUnmount() {
      window.removeEventListener("scroll", this.handleScroll);
    },
    methods: {
      handleScroll() {
          const scrollBtn = this.$refs.scrollTopButton;

          if (window.scrollY > 0) {
              scrollBtn.classList.remove("invisible");
          } else {
              scrollBtn.classList.add("invisible");
          }
      },
      scrollToTop() {
        window.scrollTo({ top: 0, behavior: "smooth" });
      },
    },
  })
</script>

