<template>
  <div class="LayoutDefault">
    <Header />
    <main class="LayoutDefault__main d-flex">
      <SlideLeft />
      <div class="w-100">
        <slot />
      </div>
    </main>
  </div>
</template>

<script>
import Header from '@/components/header/index.vue'
import SlideLeft from '@/components/slideLeft/index.vue'

export default {
  name: 'LayoutDefault',
  components: {
    Header,
    SlideLeft
  }
}
</script>

<style lang="scss">
@import './style.scss';
</style>
