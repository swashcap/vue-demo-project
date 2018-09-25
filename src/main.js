import Vue from 'vue'
import VueRouter from 'vue-router'

import App from './App.vue'
import Home from './Home.vue'
import User from './User.vue'
import store from './store'

Vue.config.productionTip = false
Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    { path: '/', component: Home },
    { path: '/users/:id', component: User }
  ]
})

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
