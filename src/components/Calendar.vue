<script setup>
import { ref, computed } from 'vue'
const msg = ref('This is 月曆')

const isOpened = ref(true) // 月曆狀態為展開
const isOpening = ref(false) // 展開動畫
const isClosed = ref(false) // 月曆狀態為收起
const isClosing = ref(false) // 收起動畫

const divClassObj = computed(() => {
  return {
    'unfold-open': isOpening.value,
    'unfold-close': isClosing.value,
    'h-45vh': isOpened.value,
    'h-15vh': isClosed.value
  }
})

const onUnfold = () => {
  setTimeout(() => {
    // 1200ms 之後將動畫移除
    isClosing.value = false
    isOpening.value = false

    if(isOpened.value) {
      // 高度從展開變收起高度
      isOpened.value = false
      isClosed.value = true
    } else {
      // 收起高度變展開高度
      isOpened.value = true
      isClosed.value = false
    }
  }, 1200)

  // 依當下月曆狀態決定要走展開動畫還是收起動畫
  if (isOpened.value) {
    isClosing.value = true
  } else {
    isOpening.value = true
  }
}
</script>

<template>
  <div :class="divClassObj" class="bg-brand-pkExlight relative overflow-hidden">
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
