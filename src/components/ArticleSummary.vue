<template>
  <article>
    <router-link :to="'/article/' + id">
      <h1>{{title}}</h1>
      <p>{{summary}}</p>
    </router-link>
  </article>
</template>

<script>
export default {
  name: 'app-article',
  props: ['id', 'summary', 'title']
}
</script>

<style scoped>
article > a {
  display: block;
  padding: 1em;
  text-decoration: none;
}
h1 {
  display: inline-block;
  font-size: 100%;
  font-weight: 600;
  margin: 0 .75em 0 0;
}
p {
  display: inline-block;
  margin: 0;
}
</style>