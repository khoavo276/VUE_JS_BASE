<template>
  <LayoutDefault>
    <div class="categories">
      <MainHeader />
      <div class="categories-content p-4 mx-5">
        <Table />
      </div>
    </div>
  </LayoutDefault>
</template>

<script>
import LayoutDefault from '@/layouts/LayoutDefault'
import MainHeader from '@/components/mainHeader/index.vue'
import Table from '@/components/table/tableCategories/index.vue'

export default {
  name: 'Home',
  components: {
    LayoutDefault,
    MainHeader,
    Table
  }
}
</script>

<style lang="scss">
@import './style.scss';
</style>
