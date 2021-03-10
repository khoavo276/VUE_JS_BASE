<template>
  <div class="slider-left mt-5">
    <ul class="p-4">
      <li>
        <button class="btnSlide mb-4">User</button>
      </li>
      <li>
        <button class="btnSlide mb-4">Collectibles</button>
      </li>
      <li>
        <button class="btnSlide mb-4 btnSlide-active">Categories</button>
      </li>
      <li>
        <button class="btnSlide mb-4">Configurations</button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "SlideLeft"
};
</script>

<style lang="scss">
@import "./style.scss";
</style>
