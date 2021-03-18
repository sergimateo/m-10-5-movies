<template>
  <div id="app">
    <div class="banner"></div>
    <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
    <!-- <div class="title">Movie Record</div> -->
    <div class="header">
      <SearchBar />
      <FilterItems />
    </div>
    <div class="items-box">
      <AvailableRadioButtons />
      <Movies />
    </div>
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

<style src="./Styles/CSS/app.css"></style>
