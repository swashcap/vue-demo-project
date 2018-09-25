<template>
  <div class="user">
    <router-link to="/">
      <span aria-hidden="true">←</span>
      Home
    </router-link>
    <h2 v-if="error">User not found</h2>
    <h1 v-else>User <strong>{{ name }}</strong></h1>
  </div>
</template>

<script>
export default {
  name: 'user',
  computed: {
    name () {
      return this.$store.state.users[this.$route.params.id] || ''
    },
    error () {
      return !(this.$route.params.id in this.$store.state.users)
    }
  }
}
</script>

<style scoped>
.user a {
  font-size: 125%;
}
</style>