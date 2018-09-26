<template>
  <footer role="contentinfo">
    <small>A <a href="https://vuejs.org">Vue.js</a> demo project by <a href="http://swashcap.com">Cory Reed</a>.</small>
    {{' '}}
    <small><a href="https://github.com/swashcap/vue-demo-project">Source code on GitHub</a></small>
  </footer>
</template>

<script>
export default {
  name: 'app-footer'
}
</script>

<style scoped>
footer {
  border-top: medium solid;
  display: flex;
  justify-content: space-between;
  padding: 1em;
}
small {
  font-size: 100%;
}
</style>