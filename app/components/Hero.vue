<script lang="ts" setup>
const colorMode = useColorMode()

const imageSrc = computed(() => {
  return colorMode.preference === 'dark' ? '/matthiasharms-dark.jpg' : '/matthiasharms.jpg'
})
</script>

<template>
  <div class="md:my-20">
    <div class="flex flex-col-reverse md:flex-row gap-10 md:gap-20 align-middle justify-center">
      <div class="flex flex-col justify-center max-w-md">
        <Headline as="h1">Harm Matthias Harms</Headline>
        <Paragraph class="text-lg font-semibold">
          One Person Frameworks • Small Teams - Fostering Innovation and Efficiency • Sustainable
          Software
        </Paragraph>
        <div class="flex gap-4">
          <UButton icon="i-simple-icons-linkedin" target="_blank"
                   to="https://www.linkedin.com/in/harm-matthias-harms-675682186/">
            LinkedIn
          </UButton>
          <UButton color="neutral" variant="outline" icon="i-simple-icons-github" target="_blank"
                   to="https://github.com/harm-matthias-harms">
            GitHub
          </UButton>
          <UButton color="neutral" variant="outline" icon="i-heroicons-envelope-20-solid" to="mailto:mail@matthiasharms.dev">Email
          </UButton>
        </div>
      </div>
      <ClientOnly>
        <NuxtImg :src="imageSrc" alt="Image of Harm Matthias Harms" class="rounded-lg w-96"/>
      </ClientOnly>
    </div>
  </div>
</template>
