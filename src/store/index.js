import Vue from 'vue'
import Vuex from 'vuex'
import movieList from './../assets/movieList.json'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    movies: movieList,
    searchedMovies: movieList,
    filters: {
      search: '',
      available: 1,
      emptySearch: false
    }
  },
  getters: {
    allMovies: state => {
      return state.movies
    },
    filteredMovies: state => {
      if (state.filters.available === 1) {
        return state.searchedMovies
      } else {
        // acabo de ver un bug, que si tengo 1 peli en available y cambio a not available, no aperece el alert bannner de no hay pelis...
        return state.searchedMovies.filter(
          movie => movie.available === state.filters.available
        )
      }
    },
    getSearchofMovies: state => {
      return state.filters.search
    },
    getEmptySearch: state => {
      return state.filters.emptySearch
    }
  },
  mutations: {
    setAvailable(state, value) {
      state.filters.available = value
      if (state.searchedMovies.length === 0) {
        state.filters.emptySearch = true
      } else {
        state.filters.emptySearch = false
      }
      if (state.searchedMovies.length === 0) {
        state.filters.emptySearch = true
      } else {
        state.filters.emptySearch = false
      }
      // no entendí el toggle comentado aqui abajo, no lo he usado.
      // he usado el if-else de arriba
      // state.filters.available = !state.filters.available
    },
    setSearchofMovies(state, value) {
      state.filters.search = value

      if (state.filters.search === '' || state.filters.search.length < 3) {
        state.searchedMovies = state.movies
      } else {
        state.searchedMovies = state.movies.filter(movie =>
          movie.title.toLowerCase().includes(state.filters.search.toLowerCase())
        )
      }
      if (state.searchedMovies.length === 0) {
        state.filters.emptySearch = true
      } else {
        state.filters.emptySearch = false
      }
    }
  },

  actions: {},
  modules: {
    // modulo de movies store cancelado, me liaba...
    // moviesModule
  },
  namespaced: true
})

export default store
