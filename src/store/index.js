import Vue from 'vue'
import Vuex from 'vuex'
import movies from './modules/movies.js'
import allMovies from './../assets/movieList.json'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    allMovies: allMovies
  },
  mutations: {},
  actions: {},
  modules: {
    movies
  }
})
