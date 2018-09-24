<template>
  <div>
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <nav>
      <ul>
        <li><router-link to="/users/pat">Go to Pat's page</router-link></li>
        <li><router-link to="/users/charlie">Go to Charlie's page</router-link></li>
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
  }
}
</script>
