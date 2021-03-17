<template>
  <div>
    <input
      type="text"
      class="search-box"
      v-model="searchText"
      placeholder="Holi... busca tu peli"
    />
  </div>
</template>

<script>
export default {
  name: 'SearchBar',
  computed: {
    // searchText(): {
    //   get(){
    //      return this.$store.state.filters.search
    //   }
    // }
  }
  // computed: {
  //   search(){
  //     get() =>
  //       return $state.filters.search

  //     set(value){
  //       $state.filter.search = value
  //     };
  //   }
  // }
}
</script>

<style scoped>
.colored-search {
  color: coral;
}

.search-box {
  width: min(95%, 95vw);

  border: 1px solid rgb(187, 255, 179);
  background: #c4f7d7;
  padding: 0.4rem;
  border-radius: 5px;
  /* text-align: center; */
  /* position: relative; */
}
</style>
