<script lang="ts" setup>
import expertises from '../../content/expertises.json'
</script>

<template>
  <div class="my-20">
    <Headline as="h2" class="text-center">Expertise</Headline>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <ExpertiseCard v-for="expertise in expertises" :expertise="expertise"/>
    </div>
  </div>
</template>
