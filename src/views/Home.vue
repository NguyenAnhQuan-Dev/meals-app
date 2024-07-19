<script setup>
import Heading from "../components/common/Heading.vue";
import ContentWrapper from "../components/layouts/ContentWrapper.vue";
import CardMeal from "../components/common/CardMeal.vue";
import callApi from "../api/index.js";
import { onMounted, ref } from "vue";

const listMeals = ref([]);
const fetchApi = async function () {
  try {
    const res = await callApi.get("/random.php");
    listMeals.value.push(res.data.meals[0]);
  } catch (err) {
    console.log("ERROR:: ", err);
  }
};

onMounted(async () => {
  for (let i = 0; i < 10; i++) {
    await fetchApi();
  }
});
</script>

<template>
  <ContentWrapper>
    <Heading content="Random Meals" v-once />
    <div>
      <ul class="list-none md:grid md:grid-cols-3 md:gap-3" v-if="listMeals">
        <li v-for="meal in listMeals" :key="meal.id">
          <CardMeal
            :title="meal.strMeal"
            :link-youtube="meal.strYoutube"
            :description="meal.strInstructions"
            :img-url="meal.strMealThumb"
            :idMeal="meal.idMeal"
          />
        </li>
      </ul>
      <div v-else>
        <p class="text-base text-orange-600 text-center">Fetch data false</p>
      </div>
    </div>
  </ContentWrapper>
</template>

<style scoped></style>
