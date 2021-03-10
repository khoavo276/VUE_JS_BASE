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
    loading: false
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
    async addCategories(state, item) {
      try {
        const data = await CATEGORIES.ADD(item);
        if (data) {
          state.categories.push(data);
        }
      } catch (error) {
        console.log(error);
      }
    },
    async delCategories(state, id) {
      try {
        const data = await CATEGORIES.DELETE(id);
        if (data) {
          state.categories = state.categories.filter(item => item.id != id);
        }
      } catch (error) {
        console.log(error);
      }
    },
    selectCategories(state, id) {
      state.selectId = id;
      let list = [...state.categories];
      state.selectItem = list.filter(item => item.id == id);
    },
    async editCategories(state, item) {
      try {
        const data = await CATEGORIES.EDIT(item);
        if (data) {
          let list = [...state.categories];
          let index = list.findIndex(x => x.id === item.id);
          list[index] = item;
          state.categories = list;
        }
      } catch (error) {
        console.log(error);
      }
    },
    async delListCategories(state) {
      if (state.selected.length > 0) {
        state.selected.map(item => {
          const data = CATEGORIES.DELETE(item);
          if (data) {
            state.categories = state.categories.filter(i => i.id != item);
          }
        });
      }
    },
    async getCategories(state) {
      state.loading = true;
      try {
        const data = await CATEGORIES.GET_LIST();
        if (data) {
          state.categories = data;
        }
        state.loading = false;
      } catch (error) {
        console.log(error);
      }
    }
  },
  actions: {},
  modules: {}
});
