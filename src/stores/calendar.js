import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCalendarStore = defineStore('calendar', () => {
  const isOpened = ref(true) // 月曆狀態為展開
  const isOpening = ref(false) // 展開動畫
  const isClosed = ref(false) // 月曆狀態為收起
  const isClosing = ref(false) // 收起動畫

  return { isOpened, isOpening, isClosed, isClosing }
})
