<script setup>
import { ref } from 'vue'
const msg = ref('This is 月曆')
</script>

<template>
  <!-- <div class="bg-brand-pkExlight h-300px sticky top-38px z-90" @touchmove.prevent="handler"> -->
  <div class="bg-brand-pkExlight h-300px relative">
    <h1 class="text-black">{{ msg }}</h1>
    <button class="btn bottomMiddle">收合</button>
  </div>
</template>

<style scoped></style>
