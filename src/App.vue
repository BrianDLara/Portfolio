<template>
  <header class="header  text-stone-50 w-1/3 min-h-screen flex  justify-around"><NavBar /></header>
  <main><RouterView></RouterView></main>
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

