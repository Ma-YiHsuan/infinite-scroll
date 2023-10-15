<script setup>
import { ref, computed } from 'vue'
import { useScheduleStore } from '@/stores/schedule'
const scrollCont = ref(null)
const loadDOM = ref(null)
const isLoading = ref(false)
const store = useScheduleStore()

const time = ref(0)
const startY = ref(0)
const transY = ref(100)
const opy = ref(0)

const transCompute = computed(() => {
  return `transform: translate(-50%, ${transY.value}%); opacity: ${opy.value}`
})

const startHandler = (e) => {
  console.log('STAR::', e)
  time.value = e.timeStamp
  startY.value = e.changedTouches[0].clientY
  isLoading.value = true
}
const moveHandler = (e) => {
  console.log(e)
  const moveD = e.changedTouches[0].clientY - startY.value
  const duration = e.timeStamp - time.value
  if (duration > 300) {
    if (isLoading.value && moveD < 0) {
      transY.value = transY.value - 20
      opy.value = opy.value + 0.3
    }
  }
}
const endHandler = (e) => {
  console.log('END::', e)
  const moveD = e.changedTouches[0].clientY - startY.value
  const duration = e.timeStamp - time.value
  if (moveD < 0 && duration > 300) {
    transY.value = 0
    opy.value = 1
    updateSchedules()
  }
}

const updateSchedules = async () => {
  await store.setSchedules()
  transY.value = 100
  opy.value = 0
//   if (!first) {
//     scrollCont.value.scrollTo({
//       bottom: 0,
//       behavior: 'smooth',
//     })
//   }
}

const mySchedules = computed(() => store.getSchedules)

updateSchedules()
</script>

<template>
  <div class="schedule__box" @touchstart="startHandler" @touchend="endHandler" @touchmove="moveHandler">
    <div class="scroll__cont" ref="scrollCont">
      <div v-for="(item, index) of mySchedules" :key="index">
        <p>標題： {{ item.title }}</p>
        <p>描述： {{ item.dec }}</p>
      </div>
    </div>
    <div ref="loadDOM" class="bottomMiddle z-90" :style="transCompute">加載中...</div>
  </div>
</template>

<style scoped>
.schedule__box {
  position: absolute;
  bottom: 0;
  /* height: calc(100% - 40% - 38px - 28px); */
  height: calc(100% - 338px);
  width: 100%;
}
.scroll__cont {
  height: 100%;
  width: 100%;
  padding: 6px 6px 0 6px;
  overflow-y: scroll;
}

/* .v-enter-from,
.v-leave-to {
  transform: translate(-50%, 100%);
}
.v-enter-to,
.v-leave-from {
  transform: translate(-50%, 0);
}
.v-enter-active,
.v-leave-active {
    transition: all 2s ease-in-out;
} */
</style>
