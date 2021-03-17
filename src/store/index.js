import Vue from 'vue'
import Vuex from 'vuex'
import moviesModule from './../modules/movies.js'

Vue.use(Vuex)

const store = new Vuex.Store({
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
    GetSearchedMovies(state, value) {
      state.filters.search = value
    }
  },
  // mutations: {},
  // actions: {},
  modules: {
    moviesModule
  }
})

export default store
