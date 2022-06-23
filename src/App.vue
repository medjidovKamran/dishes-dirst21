<template>
  <navbar />
  <div class="container">
    <router-view />
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'
export default {
  name: 'app',
  components: {
    Navbar,
  },
}
</script>

<style>
.container {
  margin-top: 3.3%;
}
</style>
