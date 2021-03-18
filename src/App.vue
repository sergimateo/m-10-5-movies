<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
    <SearchBar />
    <Movies />
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import Movies from './components/Movies.vue'
import SearchBar from './components/SearchBar.vue'

export default {
  name: 'App',
  components: {
    // HelloWorld,
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
  color: #2c3e50;
  margin-top: 60px;
}
</style>
