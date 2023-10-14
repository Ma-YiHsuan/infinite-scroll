<template>
  <Transition
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
const onBeforeEnter = (el) => {
    el.classList.add('h-100%')
}
const onEnter = (el) => {
    el.classList.add('overflow-hidden')
}
</script>

