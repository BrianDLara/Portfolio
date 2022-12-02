<template>
  <div class="md:flex ">
    <header class="header sticky text-stone-50 md:w-1/3 sm:w-screen px-4 min-h-screen flex  justify-around">
      <NavBar />
    </header>
    <main class="main-background w-screen min-h-screen flex flex-col justify-center align-center">
      <RouterView></RouterView>
    </main>
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue'
export default {
  name: 'App',
  components: {
    NavBar
  }
}
</script>

