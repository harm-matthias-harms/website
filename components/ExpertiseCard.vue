<script lang="ts" setup>
interface Expertise {
  title: string
  description: string
  badges: string[]
}

const props = defineProps({
  expertise: {
    type: Object as PropType<Expertise>,
    required: true,
  },
})
const {expertise} = toRefs(props)
</script>

<template>
  <UCard>
    <Headline as="h3">{{ expertise.title }}</Headline>
    <Paragraph>{{ expertise.description }}</Paragraph>

    <template #footer>
      <div class="flex flex-wrap gap-2">
        <UBadge v-for="badge in expertise.badges">{{ badge }}</UBadge>
      </div>
    </template>
  </UCard>
</template>
