<template>
  <div>
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <nav>
      <ul>
        <li
          v-for="(user, id) in users"
          :key="id"
        >
          <router-link :to="'/users/' + id">Go to {{ user }}'s page</router-link>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    HelloWorld
  },
  computed: {
    users () {
      return this.$store.state.users
    }
  }
}
</script>
