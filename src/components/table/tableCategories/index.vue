<template>
  <div class="tableCategories">
    <table class="table">
      <thead>
        <tr>
          <th scope="col">Key</th>
          <th scope="col">Display name</th>
          <th scope="col">Show/Hide</th>
          <th scope="col">Order</th>
          <th scope="col">Edit</th>
          <th scope="col">Delete</th>
          <th scope="col">Bulk Delete</th>
        </tr>
      </thead>
      <tbody>
        <Item
          v-for="(item, index) in getListOrder"
          :key="index"
          v-bind:item="item"
        />
      </tbody>
    </table>
  </div>
</template>

<script>
import Item from '@/components/table/tableCategories/item/index.vue'

export default {
  name: 'TableCategories',
  data() {
    return {
      selected: []
    }
  },
  components: {
    Item
  },
  computed: {
    categories() {
      return this.$store.state.categories
    },
    getListOrder() {
      let list = [...this.$store.state.categories]
      return list.sort((a, b) => a.order - b.order)
    }
  },
  methods: {
    delCategories(order) {
      this.$store.commit('delCategories', order)
    }
  }
}
</script>

<style lang="scss">
@import './style.scss';
</style>
