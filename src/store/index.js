import Vue from 'vue'
import Vuex from 'vuex'
// import moviesModule from './../modules/movies.js'
import movieList from './../assets/movieList.json'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    movies: movieList,
    filters: {
      search: '',
      available: ''
    }
  },
  getters: {
    allMovies: state => {
      return state.movies
    },
    filteredMovies: state => {
      if (state.filters.available === '') {
        return state.movies
      } else {
        return state.movies.filter(
          movie => movie.available === state.filters.available
        )
      }
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
    },
    getSearchofMovies: state => {
      return state.filters.search
    }
    //   state.filters.search = value
    // }
  },
  mutations: {
    setAvailable(state, value) {
      state.filters.available = value
      // state.filters.available = !state.filters.available
    },
    setSearchofMovies(state, value) {
      state.filters.search = value
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
