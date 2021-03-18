<template>
  <div>
    <input
      type="text"
      class="search-box"
      v-model="searchText"
      placeholder="Search for a movie title"
    />
  </div>
</template>

<script>
export default {
  name: 'SearchBar',
  computed: {
    searchText: {
      get() {
        return this.$store.state.filters.search
      },
      set(value) {
        this.$store.commit('setSearchofMovies', value)
      }
    }
  }
}
</script>

<style scoped>
.colored-search {
  color: coral;
}

.search-box {
  width: min(95%, 95vw);
  font-size: 1rem;
  border: 1px solid rgb(187, 255, 179);
  border-radius: 5px;
  background: #c4f7d7;
  padding: 0.4rem;
}
</style>
