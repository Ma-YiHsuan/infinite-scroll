import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useScheduleStore = defineStore('schedule', () => {
  const schedules = ref([])
  const getSchedules = computed(() => schedules.value)
  const setSchedules = () => {
    fetch('http://192.168.50.173:3000/api/moreData')
      .then((res) => {
        return res.json()
      })
      .then((data) => {
        const list = data.data
        schedules.value.push(...list)
      })
  }

  return { schedules, getSchedules, setSchedules }
})
