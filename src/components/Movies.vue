<template>
  <div class="movies-display">
    <div v-if="!emptySearch" class="movies">
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
    <div v-else class="alert-banner">
      Oops, no movie title matches your search
    </div>
  </div>
</template>

<script>
import Vuex from 'vuex'
export default {
  name: 'Movies',
  computed: {
    ...Vuex.mapGetters({
      showMovies: 'filteredMovies',
      emptySearch: 'getEmptySearch'
    })
  }
}
</script>

<style src="./../Styles/CSS/movies.css" scoped></style>
