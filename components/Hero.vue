<script lang="ts" setup>
const colorMode = useColorMode()

const imageSrc = computed(() => {
  return colorMode.value === 'dark' ? '/matthiasharms-dark.jpg' : '/matthiasharms.jpg'
})
</script>

<template>
  <div class="md:py-20">
    <div class="flex flex-col-reverse md:flex-row gap-10 md:gap-20 align-middle justify-center">
      <div class="flex flex-col justify-center max-w-md">
        <Headline as="h1">Harm Matthias Harms</Headline>
        <Headline as="h5">One Person Frameworks • Small Teams - Fostering Innovation and Efficiency • Sustainable
          Software
        </Headline>
        <div class="flex gap-4">
          <UButton target="_blank" to="https://www.linkedin.com/in/harm-matthias-harms-675682186/">
            LinkedIn
          </UButton>
          <UButton color="gray" target="_blank" to="https://github.com/harm-matthias-harms">GitHub</UButton>
          <UButton color="gray" to="mailto:mail@matthiasharms.dev">Email</UButton>
        </div>
      </div>
      <NuxtImg :src="imageSrc" class="rounded-lg w-96"/>
    </div>
  </div>
</template>
