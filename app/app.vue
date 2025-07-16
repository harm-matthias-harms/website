<script lang="ts" setup>
useSeoMeta({
  title: 'About Harm Matthias Harms',
  description: 'Explore my work and expertise. Learn more about my journey in web development.',
  ogTitle: 'About Harm Matthias Harms',
  ogDescription: 'Explore my work and expertise. Learn more about my journey in web development.',
  ogImage: '/matthiasharms.jpg',
  ogUrl: 'http://matthiasharms.dev/',
  twitterTitle: 'About Harm Matthias Harms',
  twitterDescription: 'Explore my work and expertise. Learn more about my journey in web development.',
  twitterImage: '/matthiasharms.jpg',
  twitterCard: 'summary'
})

useHead({
  htmlAttrs: {
    lang: 'en'
  },
  link: [
    {
      rel: 'icon',
      type: 'image/jpeg',
      href: '/matthiasharms.jpg'
    }
  ]
})
</script>

<template>
  <UApp>
    <div class="bg-slate-50 dark:bg-slate-900">
      <UContainer>
        <div class="flex flex-col min-h-screen">
          <Navbar/>
          <div class="grow relative">
            <Hero/>
            <Expertises/>
          </div>
        </div>
      </UContainer>
    </div>
  </UApp>
</template>
