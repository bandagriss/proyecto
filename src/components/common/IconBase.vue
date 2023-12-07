<template>
  <component :is="getIconComponent(icon)" />
</template>

<script setup lang="ts">
import { defineAsyncComponent } from 'vue'

defineProps({
  icon: {
    type: String,
    required: true
  }
})

const getIconComponent = (icon: string) => {
  const nameIcon = `Icon${icon}`
  return defineAsyncComponent(() => import(`@/components/icons/${nameIcon}.vue`))
}
</script>
