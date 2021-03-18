<template>
  <div>
    <div class="colored-search">
      Show Movies:
      <select @change="filterTodos($event)">
        <!-- <option value="200">200</option>
        <option value="100">100</option> -->
        <option value="50">50</option>
        <option value="20">20</option>
        <option value="10">10</option>
        <option value="5">5</option>
      </select>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FilterItems'
}
</script>

<style scoped>
.colored-search {
  color: rgb(147, 177, 64);
  font-weight: bold;
}
</style>
