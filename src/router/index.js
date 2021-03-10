import Vue from "vue";
import VueRouter from "vue-router";
import Categories from "../views/categories/index.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Categories",
    component: Categories
  }
];

const router = new VueRouter({
  mode: "history",
  routes
});

export default router;
