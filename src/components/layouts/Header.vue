<script setup>

</script>

<template>
  <div class="header h-16 w-full bg-white shadow flex justify-between items-center ">
    <router-link :to="{name: 'home'}" class="text-orange-500 font-bold text-xl h-full p-3">Home</router-link>
    <div class="navigation flex items-center h-full" >
      <router-link :to="{name: 'search'}" class="h-full p-3 flex items-center transition-colors hover:bg-orange-500 hover:text-white " active-class="text-white bg-orange-500 md:bg-transparent md:text-black">Search Meals</router-link>
      <router-link :to="{name: 'search-letter'}" class="h-full p-3 flex items-center transition-colors hover:bg-orange-500 hover:text-white " active-class="text-white bg-orange-500 md:bg-transparent md:text-black">Search By Letter</router-link>
      <router-link :to="{name: 'search-ingredients'}" class="h-full p-3 flex items-center transition-colors md:hover:bg-orange-500 md:hover:text-white " active-class="text-white bg-orange-500 md:bg-transparent md:text-black">Search By Ingredients</router-link>
    </div>
  </div>
</template>

<style scoped>

</style>