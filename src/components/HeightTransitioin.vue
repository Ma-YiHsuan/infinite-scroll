<template>
  <Transition
    :css="false"
    @before-enter="onBeforeEnter"
    @enter="onEnter"
    @after-enter="onAfterEnter"
    @before-leave="onBeforeLeave"
    @leave="onLeave"
    @after-leave="onAfterLeave"
  >
    <slot></slot>
  </Transition>
</template>

<script setup>
// import { computed } from 'vue'

// const props = defineProps({
//   closeHight: {
//     type: Number,
//     default: 0,
//   },
// })

const heightTransitionStyle = `height .5s ease-out`

const onBeforeEnter = (el) => {
  el.style.height = 0
  el.style.transition = heightTransitionStyle
}

const onEnter = (el) => {
  el.style.height = el.scrollHeight + 'px'
  el.style.overflow = 'hidden'
}

const onAfterEnter = (el) => {
  el.style.height = el.scrollHeight + 'px'
}

const onBeforeLeave = (el) => {
  el.style.height = el.scrollHeight + 'px'
  el.style.overflow = 'hidden'
}

const onLeave = (el) => {
  if (el.scrollHeight !== 0) {
    el.style.height = 0
    el.style.transition = heightTransitionStyle
  }
}

const onAfterLeave = (el) => {
  el.style.transition = ''
}
</script>
