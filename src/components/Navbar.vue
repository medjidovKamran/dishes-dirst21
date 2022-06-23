<template>
  <nav class="teal lighten-2">
    <div class="nav-wrapper">
      <router-link to="/" tag="a" class="brand-logo center">DIRS21</router-link>
      <ul class="left hide-on-med-and-down">
        <li><router-link to="/" exact>Dishes</router-link></li>
        <li><router-link to="/create">Create</router-link></li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'navbar',
}
</script>

<style lang="scss" scoped>
nav {
  padding: 0 3rem;
}
</style>
