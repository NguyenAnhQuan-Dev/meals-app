<script setup>
import CardMeal from "./CardMeal.vue";

const props = defineProps({
  dataMeals: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <div>
    <ul
      class="list-none md:grid md:grid-cols-3 md:gap-3"
      v-if="props.dataMeals.isSuccess"
    >
      <li v-for="meal in props.dataMeals.data" :key="meal.id">
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
      <p class="text-base text-orange-600 text-center">There are no meals</p>
    </div>
  </div>
</template>

<style scoped></style>
