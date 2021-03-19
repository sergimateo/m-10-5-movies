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
      state.filters.emptySearch = false
      // No me llama la atencion meter el filtraje de las pelis mediante la
      // cadena de if-elses en el getter.
      //
      // Pretendía que los dos componentes AvailableRadioButtons y SearchBar
      // fueran modulares e independientes, y que su funcionalidad
      // fuera por separado, pudiendo hacer un componente como el "cajon movies"
      // para presentar los resultados de las busquedas y que
      // pudiera tener o los aradio buttons o la barra de busqueda
      // o ambos a la vez, sin tener que manupular el codigo en este getter
      //
      // Pero bueno, ahora así ya funciona todo bien, no veo bugs
      //
      //
      // Si el radiobtn es show all: search < 3 ponemos todas las pelis,
      // si no todas con filtro search
      if (state.filters.available === 1) {
        if (state.filters.search.length < 3) {
          state.searchedMovies = state.movies
        } else {
          state.searchedMovies = state.movies.filter(movie =>
            movie.title
              .toLowerCase()
              .includes(state.filters.search.toLowerCase())
          )
        }
        // si no, aplica el filtro available siempre.
        // Y ponemos el filtro de search si length >= 3
      } else if (state.filters.search.length < 3) {
        //
        state.searchedMovies = state.movies.filter(
          movie => movie.available === state.filters.available
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
      // comprobar que si las movies filtradas no hay, le paso el flag de emptySearch
      // para que salte el v-if del alert banner. Si hay al menos 1 peli, las paso.
      if (state.searchedMovies.length === 0) {
        state.filters.emptySearch = true
      } else {
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
    },
    setSearchofMovies(state, value) {
      state.filters.search = value
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
