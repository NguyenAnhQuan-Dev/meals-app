import { createStore } from "vuex";

const store = createStore({
  state: {
    dataMealsSearch: {
      filter: "",
      isSuccess: false,
      data: [],
    },
    dataMealsSearchByChar: {
      char: "",
      isSuccess: false,
      data: [],
    },
    dataMealsSearchByIngredient: {
      ingredients: "",
      isSuccess: false,
      data: [],
    },
  },
  actions: {
    searchMeal({ commit }, payload) {
      commit("updateDataSearchMeal", payload);
    },
    searchMealByChar({ commit }, payload) {
      commit("updateDataSearchMealByChar", payload);
    },
    searchMealByIngredient({ commit }, payload) {
      commit("updateDataSearchMealByIngredient", payload);
    },
  },
  mutations: {
    updateDataSearchMeal(state, payload) {
      const { filter, isSuccess, data } = payload;
      state.dataMealsSearch = { filter, isSuccess, data };
    },
    updateDataSearchMealByChar(state, payload) {
      const { filter, isSuccess, data } = payload;
      state.dataMealsSearchByChar = { filter, isSuccess, data };
    },
    updateDataSearchMealByIngredient(state, payload) {
      const { ingredient, isSuccess, data } = payload;
      state.dataMealsSearchByIngredient = { ingredient, isSuccess, data };
    },
  },
  getters: {
    getDataMealsSearch(state) {
      return state.dataMealsSearch;
    },
    getDataMealsSearchByChar(state) {
      return state.dataMealsSearchByChar;
    },
    getDataMealsSearchByIngredient(state) {
      return state.dataMealsSearchByIngredient;
    },
  },
});

export default store;
