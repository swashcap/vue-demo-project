import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    users: {
      0: 'Pat',
      1: 'Charlie'
    }
  }
});

export default store