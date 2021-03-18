<template>
  <div id="app">
    <div class="banner"></div>
    <div class="header">
      <SearchBar />
      <AvailableRadioButtons />
    </div>
    <div class="items-box">
      <Movies />
    </div>
  </div>
</template>

<script>
import AvailableRadioButtons from './components/AvailableRadioButtons.vue'
import Movies from './components/Movies.vue'
import SearchBar from './components/SearchBar.vue'

export default {
  name: 'App',

  components: {
    AvailableRadioButtons,
    Movies,
    SearchBar
  }
}
</script>

<style src="./Styles/CSS/app.css"></style>
