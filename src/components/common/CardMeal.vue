<script setup>
import useSlice from "../../composable/useSlice.js";
import { useRouter } from "vue-router";

const props = defineProps({
  imgUrl: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  linkYoutube: {
    type: String,
    required: true,
  },
  idMeal: {
    type: String,
    required: true,
  },
});
const des = useSlice(props.description, 30);
const router = useRouter();

const handleDetail = () => {
  router.push({
    name: "meal",
    params: { idMeal: props.idMeal },
  });
};
</script>

<template>
  <div
    class="w-full h-max my-2 rounded-xl overflow-hidden cursor-pointer"
    @click="handleDetail"
  >
    <div class="w-full h-48">
      <img
        :src="props.imgUrl"
        alt="images of meals"
        class="w-full h-full object-cover"
        loading="lazy"
      />
    </div>
    <div class="bg-white p-2">
      <p class="text-base font-bold">{{ props.title }}</p>
      <p class="text-base py-1">{{ des }}</p>
      <button class="bg-orange-500 w-[90px] h-[40px] rounded cursor-pointer">
        <a
          :href="props.linkYoutube"
          target="_blank"
          class="font-light text-base text-white"
          >Youtube</a
        >
      </button>
    </div>
  </div>
</template>

<style scoped></style>
