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
    filteredMovies: state => {
      return state.searchedMovies
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
      } else if (state.filters.available === 1) {
        state.filters.emptySearch = false

        state.searchedMovies = state.movies.filter(movie =>
          movie.title.toLowerCase().includes(state.filters.search.toLowerCase())
        )
      } else {
        state.filters.emptySearch = false

        // acabo de ver un bug, que si tengo 1 peli en available y cambio a not available, no aperece el alert bannner de no hay pelis...

        state.searchedMovies = state.movies
          .filter(movie =>
            movie.title
              .toLowerCase()
              .includes(state.filters.search.toLowerCase())
          )
          .filter(movie => movie.available === state.filters.available)
      }
    },
    setSearchofMovies(state, value) {
      state.filters.search = value

      if (
        (state.filters.search === '' || state.filters.search.length < 3) &&
        state.filters.available === 1
      ) {
        state.searchedMovies = state.movies
      } else if (state.filters.available === 1) {
        // debugger
        state.searchedMovies = state.movies.filter(movie =>
          movie.title.toLowerCase().includes(state.filters.search.toLowerCase())
        )
      } else {
        state.searchedMovies = state.movies
          .filter(movie =>
            movie.title
              .toLowerCase()
              .includes(state.filters.search.toLowerCase())
          )
          .filter(movie => movie.available === state.filters.available)
      }
      if (state.searchedMovies.lenght === 0) {
        state.filters.emptySearch = true
      } else {
        state.filters.emptySearch = false
      }
    }
  },

  actions: {},
  modules: {
    //clean comments
    // modulo de movies store cancelado, me liaba...
    // moviesModule
  },
  namespaced: true
})

export default store
