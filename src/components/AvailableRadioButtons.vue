<template>
  <div>
    <div class="colored-search">
      <input
        type="radio"
        id="radio0"
        name="available"
        v-model="isAvailable"
        checked="checked"
        :value="1"
      />
      <label for="radio0">Show All</label>
      <input
        type="radio"
        id="radio1"
        name="available"
        v-model="isAvailable"
        :value="true"
      />

      <label for="radio1">Available</label>
      <input
        type="radio"
        id="radio2"
        name="available"
        v-model="isAvailable"
        :value="false"
      />
      <label for="radio2">Not Available</label>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AvailableRadioButtons',
  computed: {
    isAvailable: {
      get() {
        return this.$store.state.filters.available
      },
      set(value) {
        this.$store.commit('setAvailable', value)
      }
    }
  }
}
</script>

<style scoped>
.colored-search {
  color: rgb(147, 177, 64);
  font-weight: bold;
}
</style>
