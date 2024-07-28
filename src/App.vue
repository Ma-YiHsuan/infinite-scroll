<script setup>
import CalendarView from '@/components/CalendarView.vue'
import ScheduleList from '@/components/ScheduleList.vue'
</script>

<template>
  <nav class="sticky top-0 z-100">
    <div class="bg-brand-pk h-38px w-screen text-center">
      <span class="text-black text-20px lineHt-38 font-medium">行事曆</span>
    </div>
  </nav>
  <div class="flex flex-col content">    
    <CalendarView />
    <ScheduleList />
  </div>
</template>

<style scoped>
.content {
  height: calc(100vh - 38px);
}
</style>
