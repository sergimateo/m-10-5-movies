<template>
  <div id="app">
    <img
      alt="Movie logo"
      class="img"
      src="./assets/480852153_1280x720_op02.jpg"
    />
    <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
    <!-- <div class="title">Movie Record</div> -->
    <div class="header">
      <SearchBar />
      <FilterItems />
      <!-- <SearchBar />
      <FilterItems /> -->
    </div>
    <AvailableRadioButtons />
    <Movies />
  </div>
</template>

<script>
import AvailableRadioButtons from './components/AvailableRadioButtons.vue'
import FilterItems from './components/FilterItems.vue'
import Movies from './components/Movies.vue'
import SearchBar from './components/SearchBar.vue'

export default {
  name: 'App',
  components: {
    AvailableRadioButtons,
    FilterItems,
    Movies,
    SearchBar
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background-color: #020e02;
  margin-top: 30px;
  padding: 0.5rem;
}
.img {
  width: 100%;
}

.header {
  display: grid;
  grid-template-columns: 3fr 1fr;
  grid-gap: 1rem;
  align-items: center;
  padding: 1rem 0;
}
@media (max-width: 750px) {
  .header {
    grid-template-columns: 1fr;
  }
}

// .search-bar {
//   position: relative;
// }
// .filter-items {
//   position: relative;
// }
</style>
