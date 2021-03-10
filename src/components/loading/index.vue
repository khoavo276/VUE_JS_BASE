<template>
  <div v-bind:class="{ 'd-none': !loading }">
    <div class="spinner-grow text-primary" role="status">
      <span class="sr-only">Loading...</span>
    </div>
    <div class="spinner-grow text-secondary" role="status">
      <span class="sr-only">Loading...</span>
    </div>
    <div class="spinner-grow text-success" role="status">
      <span class="sr-only">Loading...</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "Loading",
  props: {
    loading: Boolean
  }
};
</script>

<style lang="scss">
@import "./style.scss";
</style>
