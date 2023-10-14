<script setup>
import { ref } from 'vue'
const msg = ref('This is 月曆')
</script>

<template>
  <div class="bg-brand-pkExlight h-300px relative">
    <h1 class="text-black">{{ msg }}</h1>
    <button class="btn absolute bottom-8px left-50% translate-x--50%">收合</button>
  </div>
</template>

<style scoped>
</style>
