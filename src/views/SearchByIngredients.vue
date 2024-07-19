<script setup>
import ContentWrapper from "../components/layouts/ContentWrapper.vue";
import Heading from "../components/common/Heading.vue";
import { onMounted, ref } from "vue";
import callApi from "../api";
import { useRouter } from "vue-router";

const listIngredient = ref([]);
const router = useRouter();
const ingredientSearch = ref("");
const fetchApi = async function () {
  try {
    const res = await callApi.get("/list.php?i=list");
    listIngredient.value = res.data.meals;
  } catch (error) {
    console.log("ERROR ::", error);
  }
};

onMounted(async () => {
  await fetchApi();
});

const handleSearchIngredient = async function (e) {
  ingredientSearch.value = e.target.value.toLowerCase();
  if (ingredientSearch.value) {
    const filteredIngredients = listIngredient.value.filter((ingredient) =>
      ingredient.strIngredient.toLowerCase().includes(ingredientSearch.value)
    );
    listIngredient.value = filteredIngredients;
  } else {
    await fetchApi();
  }
};

const handleSelectIngredient = (e) => {
  const ingredient = e.target.textContent.toLowerCase();
  router.push({
    name: "by-ingredients",
    params: { ingredient },
  });
};
</script>

<template>
  <ContentWrapper>
    <Heading content="Meals by In" />
    <input
      type="text"
      placeholder="Search for Ingredients"
      class="w-full h-10 shadow p-3 outline-orange-500 outline-4"
      @change="handleSearchIngredient"
      :value="ingredientSearch"
    />
    <ul class="grid grid-cols-2 gap-4 list-none mt-5">
      <li
        v-for="ingredient in listIngredient"
        :key="ingredient.idIngredient"
        class="w-full h-14 rounded bg-white shadow font-bold text-xl p-3 cursor-pointe"
        @click="handleSelectIngredient"
      >
        {{ ingredient.strIngredient }}
      </li>
    </ul>
  </ContentWrapper>
</template>

<style scoped></style>
