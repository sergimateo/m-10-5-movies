import movieList from './../assets/movieList.json'

const movies = {
  namespaced: true,
  state: {
    movies: movieList
  },
  getters: {
    // allMovies: state => state.movies
    allMovies: state => {
      return state.movies
    }
  },

  actions: {},

  mutations: {}
}

export default movies
// {
// state,
// getters,
// actions,
// mutations
// }
