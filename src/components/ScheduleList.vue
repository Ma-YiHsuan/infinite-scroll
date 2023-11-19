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
    <div ref="loadDOM" class="bottomMiddle z-90 loading_circle" :style="transCompute">加載</div>
  </div>
</template>

<style scoped lang="scss">
.schedule__box {
  // position: absolute;
  // bottom: 0;
  min-height: calc(100% - 45vh);
  max-height: 100%;
  height: 50%;
  padding: 6px;
  // overflow-y: auto;
  width: 100%;
  .scroll__cont {
    height: 100%;
    width: 100%;
    overflow-y: auto;
  }
}S
.loading_circle {
  padding: 8px 0px;
  text-align: center;
  height: 40px;
  width: 40px;
  border-radius: 50%;
  box-shadow: 3px 3px 8px 0px #847D7C;
  background-color: #fff;
}
</style>
