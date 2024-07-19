<script setup>
import { onMounted, computed } from "vue";
import ContentWrapper from "../components/layouts/ContentWrapper.vue";
import Heading from "../components/common/Heading.vue";
import { useRoute } from "vue-router";
import callApi from "../api/index.js";
import { useStore } from "vuex";
import CardMealForIngredient from "../components/common/CardMealForIngredient.vue";
const route = useRoute();
const store = useStore();

const fetchApi = async function () {
  try {
    const res = await callApi.get(`filter.php?i=${route.params.ingredient}`);
    const payload = {
      ingredient: route.params.ingredient,
      isSuccess: true,
      data: res.data.meals,
    };
    await store.dispatch("searchMealByIngredient", payload);
  } catch (error) {
    console.log("ERROR :: ", error);
  }
};

onMounted(async () => {
  await fetchApi();
});

const listMealByIngredient = computed(
  () => store.getters.getDataMealsSearchByIngredient.data
);
</script>

<template>
  <ContentWrapper>
    <Heading :content="`Meal for ${route.params.ingredient}`" />
    <CardMealForIngredient :dataMeals="listMealByIngredient" />
  </ContentWrapper>
</template>

<style lang="scss" scoped></style>
