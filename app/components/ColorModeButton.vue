<script lang="ts" setup>
const colorMode = useColorMode()

const isDark = computed({
  get() {
    return colorMode.preference === 'dark'
  },
  set() {
    colorMode.preference = colorMode.preference === 'dark' ? 'light' : 'dark'
  }
})
</script>

<template>
  <ClientOnly>
    <UButton
        :icon="isDark ? 'i-heroicons-moon-20-solid' : 'i-heroicons-sun-20-solid'"
        aria-label="Theme"
        color="gray"
        variant="ghost"
        @click="isDark = !isDark"
    />

    <template #fallback>
      <div class="w-8 h-8"/>
    </template>
  </ClientOnly>
</template>
