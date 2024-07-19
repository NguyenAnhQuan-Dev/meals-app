<script setup>
import ContentWrapper from "../components/layouts/ContentWrapper.vue";
import Heading from "../components/common/Heading.vue";
import { computed, ref } from "vue";
import callApi from "../api/index.js";
import ListMeal from "../components/common/ListMeal.vue";
import { useStore } from "vuex";

const store = useStore();
const dataFilter = ref("");

const handleSearch = async function () {
  try {
    const res = await callApi.get(`/search.php?s=${dataFilter.value}`);
    const payload = {
      filter: dataFilter.value,
      isSuccess: true,
      data: res.data.meals,
    };
    await store.dispatch("searchMeal", payload);
  } catch (err) {
    console.log(err);
  }
};

const sendFilter = function (e) {
  if (e.key === "Enter") {
    handleSearch();
  }
};

const dataMeal = computed(() => store.getters.getDataMealsSearch);
</script>

<template>
  <ContentWrapper>
    <Heading content="Search Meals by Name" />
    <div>
      <input
        placeholder="Search for meals"
        id="search-input"
        class="w-full h-10 my-3 px-3 py-2 rounded shadow outline-orange-500 outline-4"
        v-model="dataFilter"
        @keydown="sendFilter"
      />
    </div>
    <ListMeal :dataMeals="dataMeal" />
  </ContentWrapper>
</template>

<style scoped></style>
