import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

import { CATEGORIES } from "../constants/endponts";

export default new Vuex.Store({
  state: {
    categories: [],
    selectId: "",
    selectItem: [],
    selected: [],
    loading: true
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
    },
    async getCategories(state) {
      try {
        const data = await CATEGORIES.GET_LIST();
        if (data) {
          state.categories = data;
        }
        console.log("data :", data);
        console.log("state: ", state.categories);
      } catch (error) {
        console.log(error);
      }
    }
  },
  actions: {},
  modules: {}
});
