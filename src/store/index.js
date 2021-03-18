import Vue from 'vue'
import Vuex from 'vuex'
// import moviesModule from './../modules/movies.js'
import movieList from './../assets/movieList.json'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    movies: movieList,
    searchedMovies: movieList,
    filters: {
      search: '',
      available: '',
      emptySearch: false
    }
  },
  getters: {
    allMovies: state => {
      return state.movies
    },
    filteredMovies: state => {
      if (state.filters.available === '') {
        return state.searchedMovies
      } else {
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
      // if (state.searchedMovies.length === 0) {
      //   state.filters.emptySearch = true
      // } else {
      //   state.filters.emptySearch = false
      // }
    }
  },
  mutations: {
    setAvailable(state, value) {
      state.filters.available = value
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
  // actions: {},
  modules: {
    // moviesModule
  },
  namespaced: true,

  actions: {}
})

export default store

// if (state.filters.available === '1') {
//   return state.movies
// } else if (state.filters.available === '2') {
//   return state.movies.filter(movie => movie.available === true)
// } else if (state.filters.available === '3') {
//   return state.movies.filter(movie => movie.available === false)
// }
// switch (state.filters.available) {
//   case true:
//     state.movies.filter(movie => movie.available === true)
//     break

//   case false:
//     state.movies.filter(movie => movie.available === false)
//     break

//   // case 'showAll':

//   //   break

//   default:
//     state.movies.filter(movie => movie)
//     break
// }
