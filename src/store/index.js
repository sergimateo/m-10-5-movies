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
      if (state.searchedMovies.length === 0) {
        state.filters.emptySearch = true
      } else {
        state.filters.emptySearch = false
        return state.searchedMovies
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

      //si esta show all y el search es menor que 3, si no
      if (state.filters.available === 1 && state.filters.search.length < 3) {
        state.searchedMovies = state.movies

        // si el search es menor q tres () y el show no es 1, aplica available si no
      } else if (state.filters.search.length < 3) {
        state.searchedMovies = state.movies.filter(
          movie => movie.available === state.filters.available
        )
        // si no, es que entra el filtro del search combinado con el filtro del available
        // si es 1 show all filtro barra busqueda nada mas, si no filtro busqueda y available
      } else if (state.filters.available === 1) {
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
    },
    setSearchofMovies(state, value) {
      state.filters.search = value

      if (state.filters.available === 1 && state.filters.search.length < 3) {
        state.searchedMovies = state.movies
      } else if (state.filters.search.length < 3) {
        state.searchedMovies = state.movies.filter(
          movie => movie.available === state.filters.available
        )

        // si no, es que entra el filtro del search combinado con el filtro del available
        // si es 1 show all filtro barra busqueda nada mas, si no filtro busqueda y available
      } else if (state.filters.available === 1) {
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
      //
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
