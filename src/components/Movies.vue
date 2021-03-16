<template>
  <div>
    <!-- <div class="colored">Holi Red</div> -->
    <div class="movies">
      <div v-for="movie in allMovies" :key="movie.id" class="movie">
        {{ movie.title }}
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
.colored {
  color: red;
}
.movies {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1rem;
}

.movie {
  border: 1px solid #ccc;
  background: #aae688;
  padding: 1rem;
  border-radius: 5px;
  text-align: center;
  position: relative;
  cursor: pointer;
  font-weight: bold;
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
