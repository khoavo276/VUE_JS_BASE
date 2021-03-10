import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    categories: [
      { id: 0, key: "games", name: "Games", status: true, order: 20 },
      { id: 1, key: "defi", name: "Defi", status: false, order: 6 },
      { id: 2, key: "khoa", name: "Khoa", status: false, order: 10 },
      { id: 3, key: "thinh", name: "Thinh", status: true, order: 9 }
    ],
    selectId: "",
    selectItem: [],
    selected: []
  },
  getters: {
    getLastId: state => {
      return state.categories[state.categories.length - 1].id;
    },
    getItemByOrder: state => order => {
      if (state.categories.find(item => item.order === order)) {
        return true;
      } else return false;
    }
  },
  mutations: {
    addCategories(state, item) {
      state.categories.push(item);
    },
    delCategories(state, id) {
      state.categories = state.categories.filter(item => item.id != id);
    },
    selectCategories(state, id) {
      state.selectId = id;
      let list = [...state.categories];
      state.selectItem = list.filter(item => item.id == id);
    },
    editCategories(state, item) {
      let list = [...state.categories];
      let index = list.findIndex(x => x.id === item.id);
      list[index] = item;
      state.categories = list;
    },
    delListCategories(state) {
      if (state.selected.length > 0) {
        state.selected.map(item => {
          state.categories = state.categories.filter(i => i.id != item);
        });
      }
    }
  },
  actions: {},
  modules: {}
});
