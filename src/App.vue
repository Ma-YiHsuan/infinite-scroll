<script setup>
import Calendar from './components/Calendar.vue'
import ScheduleList from './components/ScheduleList.vue'
</script>

<template>
  <nav class="sticky top-0 z-100">
    <div class="bg-brand-pk h-38px w-screen text-center">
      <span class="text-black text-20px lineHt-38 font-medium">行事曆</span>
    </div>
  </nav>
  <Calendar />
  <ScheduleList />
</template>

<style scoped></style>
