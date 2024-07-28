<script setup>
import { ref, computed } from 'vue'
import { useCalendarStore } from '@/stores/calendar' 

const msg = ref('This is 月曆')
const store = useCalendarStore()
// const isOpened = ref(true) // 月曆狀態為展開
// const isOpening = ref(false) // 展開動畫
// const isClosed = ref(false) // 月曆狀態為收起
// const isClosing = ref(false) // 收起動畫

const divClassObj = computed(() => {
  return {
    'unfold-open': store.isOpening,
    'unfold-close': store.isClosing,
    'h-45vh': store.isOpened,
    'h-15vh': store.isClosed
  }
})

const onUnfold = () => {
  setTimeout(() => {
    // 1200ms 之後將動畫移除
    store.isClosing = false
    store.isOpening = false

    if(store.isOpened) {
      // 高度從展開變收起高度
      store.isOpened = false
      store.isClosed = true
    } else {
      // 收起高度變展開高度
      store.isOpened = true
      store.isClosed = false
    }
  }, 1200)

  // 依當下月曆狀態決定要走展開動畫還是收起動畫
  if (store.isOpened) {
    store.isClosing = true
  } else {
    store.isOpening = true
  }
}
</script>

<template>
  <div :class="divClassObj" class="relative overflow-hidden shadow-lg">
    <h1 class="text-black">{{ msg }}</h1>
    <button @click.prevent="onUnfold" class="btn bottomMiddle">收合</button>
  </div>
</template>

<style scoped>
.unfold-open {
  animation: opening 1s ease 0.2s;
}

.unfold-close {
  animation: closing 1s ease 0.2s;
}

@keyframes opening {
  0% {
    height: 15vh;
  }
  100% {
    height: 45vh;
  }
}
@keyframes closing {
  0% {
    height: 45vh;
  }
  100% {
    height: 15vh;
  }
}
</style>
