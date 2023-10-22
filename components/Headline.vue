<script lang="ts" setup>
const props = defineProps({as: {type: String, required: true}})
const {as} = toRefs(props)

const paddingBottom = computed(() => {
  return {
    'h1': 'pb-10',
    'h2': 'pb-10',
    'h3': 'pb-8',
    'h4': 'pb-6',
    'h5': 'pb-4',
    'h6': 'pb-4',
  }[as.value]
})

const fontSize = computed(() => {
  return {
    'h1': 'text-5xl',
    'h2': 'text-4xl',
    'h3': 'text-3xl',
    'h4': 'text-xl font-semibold',
    'h5': 'text-lg font-semibold',
    'h6': 'font-semibold',
  }[as.value]
})
</script>

<template>
  <component :is="as" :class="[fontSize, paddingBottom]" class="text-slate-900 dark:text-slate-50">
    <slot/>
  </component>
</template>