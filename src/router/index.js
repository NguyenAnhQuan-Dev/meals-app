import { createRouter, createWebHistory } from "vue-router";
import DetailIngredient from "../views/DetailIngredient.vue";
import Home from "../views/Home.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/search",
    name: "search",
    component: () => import("../views/Search.vue"),
  },
  {
    path: "/search-letter",
    name: "search-letter",
    component: () => import("../views/SearchByLetter.vue"),
  },
  {
    path: "/search-ingredients",
    name: "search-ingredients",
    component: () => import("../views/SearchByIngredients.vue"),
  },
  {
    path: "/by-ingredients/:ingredient",
    name: "by-ingredients",
    component: () => import("../views/DetailIngredient.vue"),
  },
  {
    path: "/meal/:idMeal",
    name: "meal",
    component: () => import("../views/DetailMeal.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
