<template>
  <ul>
    <li
      v-for="(article, id) in articles"
      :key="id"
    >
      <ArticleSummary
        :id="id"
        :summary="article.summary"
        :title="article.title"
      />
    </li>
  </ul>
</template>

<script>
import ArticleSummary from '../components/ArticleSummary'

export default {
  name: 'home',
  components: {
    ArticleSummary
  },
  computed: {
    articles () {
      return this.$store.state.articles
    }
  }
}
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>