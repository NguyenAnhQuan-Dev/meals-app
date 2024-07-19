<script setup>
  const props = defineProps({
    content: {
      type: String,
      required: true
    }
  })
</script>

<template>
  <h1 class="font-bold text-orange-600 text-4xl pb-2">{{props.content}}</h1>
</template>

<style scoped>

</style>