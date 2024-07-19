<script setup>
import ContentWrapper from "../components/layouts/ContentWrapper.vue";
import Heading from "../components/common/Heading.vue";
import ListMeal from "../components/common/ListMeal.vue";
import callApi from "../api/index.js";
import { computed, ref } from "vue";
import { useStore } from "vuex";

const store = useStore();
const character = ref("ABCDEFGHIJKLMNOPQRSTUVWXYZ".split(""));
const handleCharSelection = async function (e) {
  const res = await callApi.get(`search.php?f=${e.target.value}`);
  const data = await res.data.meals;
  const payload = {
    filter: e.target.value,
    isSuccess: true,
    data,
  };
  store.dispatch("searchMealByChar", payload);
};

const dataMeal = computed(() => store.getters.getDataMealsSearchByChar);
</script>

<template>
  <ContentWrapper>
    <Heading content="Meals by Letter" />
    <ul class="flex justify-center items-center gap-2 my-3">
      <li v-for="(char, index) in character" :key="index">
        <button
          class="text-base font-medium cursor-pointer"
          :value="char.toLowerCase()"
          @click="handleCharSelection"
        >
          {{ char }}
        </button>
      </li>
    </ul>
    <ListMeal :dataMeals="dataMeal" />
  </ContentWrapper>
</template>

<style scoped></style>
