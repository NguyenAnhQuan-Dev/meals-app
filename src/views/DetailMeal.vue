<script setup>
import ContentWrapper from "../components/layouts/ContentWrapper.vue";
import Heading from "../components/common/Heading.vue";
import callApi from "../api";
import { useRoute } from "vue-router";
import { computed, onMounted, reactive } from "vue";

const route = useRoute();
const meal = reactive({});

const fetchData = async function () {
  try {
    const res = await callApi.get(`lookup.php?i=${route.params.idMeal}`);
    Object.assign(meal, res.data.meals[0]);
  } catch (error) {
    console.error(error);
  }
};

const listIngredient = computed(() => {
  const keys = Object.keys(meal).filter((key) =>
    key.startsWith("strIngredient")
  );
  return keys.map((key) => meal[key]);
});

const listMeasure = computed(() => {
  const keys = Object.keys(meal).filter((key) => key.startsWith("strMeasure"));
  return keys.map((key) => meal[key]);
});

onMounted(async () => {
  await fetchData();
});
</script>

<template>
  <ContentWrapper>
    <Heading :content="meal.strMeal" />
    <div>
      <div class="flex justify-center">
        <img :src="meal.strMealThumb" alt="Meal Image" />
      </div>
      <div class="pb-3 md:flex md:justify-between">
        <p class="text-xl">
          <span class="text-black font-bold text-xl">Category: </span>
          {{ meal.strCategory }}
        </p>
        <p class="text-xl">
          <span class="text-black font-bold text-xl">Area: </span>
          {{ meal.strArea }}
        </p>
        <p class="text-xl">
          <span class="text-black font-bold text-xl">Tags: </span>
          {{ meal.strTags }}
        </p>
      </div>
      <p>{{ meal.strInstructions }}</p>
      <div
        class="grid grid-cols-1 grid-rows-2 gap-3 py-3 md:grid-cols-2 md:grid-rows-1"
      >
        <div>
          <h3 class="text-xl text-black font-bold">Ingredients</h3>
          <ul>
            <li v-for="(ingredient, index) in listIngredient" :key="ingredient">
              <span v-if="ingredient"> {{ index + 1 }}. {{ ingredient }}</span>
              <span v-else></span>
            </li>
          </ul>
        </div>
        <div>
          <h3 class="text-xl text-black font-bold">Measures</h3>
          <ul>
            <li v-for="(measure, index) in listMeasure" :key="measure">
              <span v-if="measure.trim()"> {{ index + 1 }}. {{ measure }}</span>
            </li>
          </ul>
        </div>
      </div>
      <button class="bg-orange-500 w-[90px] h-[40px] rounded cursor-pointer">
        <a target="_blank" class="font-light text-base text-white">Youtube</a>
      </button>
    </div>
  </ContentWrapper>
</template>

<style lang="scss" scoped></style>
