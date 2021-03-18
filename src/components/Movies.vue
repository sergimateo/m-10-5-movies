<template>
  <div>
    <div class="movies">
      <div v-for="movie in showMovies" :key="movie.id" class="movie">
        <div class="movie-header">
          <p class="movie-title">{{ movie.title }}</p>

          <p class="movie-available">Available: {{ movie.available }}</p>
        </div>

        <div class="movie-description">
          {{ movie.description }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Vuex from 'vuex'
export default {
  name: 'Movies',
  computed: {
    ...Vuex.mapGetters({ showMovies: 'filteredMovies' })
  }
}
</script>

<style src="./../Styles/CSS/movies.css" scoped></style>
