<template>
  <div class="user">
    <router-link to="/">
      <span aria-hidden="true">←</span>
      Home
    </router-link>
    <h1>User <strong>{{ $route.params.id }}</strong></h1>
  </div>
</template>

<script>
export default {
  name: 'user'
}
</script>

<style scoped>
.user a {
  font-size: 125%;
}
</style>