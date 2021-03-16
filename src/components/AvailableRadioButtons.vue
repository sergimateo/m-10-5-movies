<template>
  <div>
    <div class="colored-search">
      <input
        type="radio"
        id="radio1"
        name="available"
        checked="checked"
        value="true"
      />
      <label for="age1">Available</label>
      <input type="radio" id="radio2" name="available" value="false" />
      <label for="radio2">Not Available</label>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AvailableRadioButtons'
  // computed: {
  //   search(){
  //     get(){
  //       return $state.filters.search
  //     },
  //     set(value){
  //       $state.filter.search = value
  //     }
  //   }
  // }
}
</script>

<style scoped>
.colored-search {
  color: rgb(147, 177, 64);
  font-weight: bold;
  display: flex;
  justify-content: center;
  padding-bottom: 1rem;
}
</style>
