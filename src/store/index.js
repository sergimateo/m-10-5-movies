import Vue from 'vue'
import Vuex from 'vuex'
import moviesModule from './../modules/movies.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    filters: {
      search: '',
      available: false
    }
  },
  getters: {
    GetAvailable(state) {
      state.filters.available = !state.filters.available
    },
    GetSearch(state, value) {
      state.filters.search = value
    }
  },
  // mutations: {},
  // actions: {},
  modules: {
    moviesModule
  }
})
