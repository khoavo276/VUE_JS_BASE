<template>
  <tr>
    <td>{{ item.key }}</td>
    <td>{{ item.name }}</td>
    <td>
      <div v-if="item.status">
        <img src="../../../../assets/images/check.png" />
      </div>
      <div v-else>
        <img src="../../../../assets/images/close.png" />
      </div>
    </td>
    <td>{{ item.order }}</td>
    <td>
      <div v-b-modal.modal-edit v-on:click="editCategorise(item.id)">
        <img src="../../../../assets/images/edit.png" />
      </div>
    </td>
    <td>
      <div class="btn-del" v-on:click="delCategories(item.id)">
        <img src="../../../../assets/images/delete.png" />
      </div>
    </td>
    <td>
      <b-form-checkbox
        :key="item.id"
        :value="item.id"
        inline
        v-model="$store.state.selected"
      >
      </b-form-checkbox>
    </td>
  </tr>
</template>

<script>
export default {
  name: 'Item',
  props: {
    item: Object
  },
  methods: {
    delCategories(id) {
      this.$store.commit('delCategories', id)
    },
    editCategorise(id) {
      this.$store.commit('selectCategories', id)
    }
  },
  computed: {}
}
</script>
