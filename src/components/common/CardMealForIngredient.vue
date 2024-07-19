<script setup>
import { useRouter } from "vue-router";

const props = defineProps({
  dataMeals: {
    type: Array,
    require: true,
  },
});

const router = useRouter();
</script>

<template>
  <ul class="list-none md:grid md:grid-cols-3 md:gap-3">
    <li
      v-for="meal in props.dataMeals"
      :key="meal.idMeal"
      class="rounded h-max bg-white overflow-hidden cursor-pointer"
      @click="() => router.push(`/meal/${meal.idMeal}`)"
    >
      <img :src="meal.strMealThumb" alt="meal-thumb" class="h-max" />
      <div class="p-3">
        <p class="text-base">{{ meal.strMeal }}}</p>
        <button class="bg-orange-500 w-[90px] h-[40px] rounded cursor-pointer">
          <a target="_blank" class="font-light text-base text-white">Youtube</a>
        </button>
      </div>
    </li>
  </ul>
</template>

<style lang="scss" scoped></style>
