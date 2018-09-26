<template>
  <header role="banner">
    <router-link to="/" rel="home">
      <h1>Vue Demo Project</h1>
    </router-link>
  </header>
</template>

<script>
export default {
  name: 'app-header'
}
</script>

<style scoped>
header {
  border-bottom: medium solid;
  padding: 1em;
}
h1 {
  font-size: 150%;
  font-weight: 500;
  line-height: inherit;
  margin: 0;
}
a {
  text-decoration: none;
}
</style>