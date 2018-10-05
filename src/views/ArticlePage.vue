<template>
  <article>
    <h1 class="title">{{ article.title }}</h1>
    <div v-html="article.description"></div>
  </article>
</template>

<script>
export default {
  name: 'article-page',
  computed: {
    article() {
      return this.$store.state.articles[this.$route.params.id]
    }
  }
}
</script>

<style scoped>
article {
  max-width: 38em;
  padding: 1em;
}
.title {
  font-size: 200%;
  font-weight: 500;
  line-height: 1;
  margin: .5rem 0 2rem;
}
</style>