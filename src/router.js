import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from './views/Home.vue'
import ArticlePage from './views/ArticlePage.vue'

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    { path: '/', component: Home },
    { path: '/article/:id', component: ArticlePage }
  ]
})

export default router