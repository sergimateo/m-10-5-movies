<template>
  <div>
    <input type="text" class="search-box" placeholder="Holi... busca tu peli" />
  </div>
</template>

<script>
export default {
  name: 'SearchBar'
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
  /* display: flex; */
  /* grid-template-columns: 1fr;
  grid-gap: 1rem; */
  border: 1px solid rgb(167, 78, 78);
  /* background: #8fa3ce; */
  padding: 0.4rem;
  border-radius: 5px;
  /* text-align: center; */
  /* position: relative; */
}
</style>
