<template>
  <div>
    <div class="movies">
      <div v-for="movie in allMovies" :key="movie.id" class="movie">
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
  computed: { ...Vuex.mapGetters({ allMovies: 'moviesModule/allMovies' }) }
}
</script>

<style scoped>
.movies {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1rem;
}

.movie {
  border: 1px solid rgb(106, 221, 96);
  /* background: #aae688; */
  /* padding: 1rem; */
  display: grid;
  border-radius: 5px;
  text-align: center;
  position: relative;
  cursor: pointer;
  font-weight: bold;
}

.movie-header {
  margin: 0;
  align-self: stretch;
  display: grid;
}
.movie-title {
  background: #81b166;
  font-size: 1rem;
  margin: 0;
  padding: 0.3rem;
  /* justify-self: stretch; */
}

.movie-available {
  background: #81b166;
  font-size: 0.7rem;
  margin: 0;
  padding: 0.3rem;
}
.movie-description {
  background: #ace28c;
  font-size: 0.8rem;
  margin: 0;
  padding: 0.3rem;
  align-self: stretch;
}
@media (max-width: 750px) {
  .movies {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 500px) {
  .movies {
    grid-template-columns: 1fr;
  }
}
</style>
