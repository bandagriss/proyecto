<template>
  <div class="w-full">
    <RouterLink
      :to="data.url"
      class="p-4 hover:bg-primary/70 cursor-pointer rounded-2xl flex mt-0.5"
      :class="
        $router.currentRoute.value.fullPath === data.url
          ? 'bg-primary text-white'
          : 'text-gray-400 hover:text-white'
      "
    >
      <div class="flex space-x-4 pl-2">
        <IconBase :icon="data.icon" class="h-5 w-5 font-thin"></IconBase>
        <p class="font-medium">{{ data.name }}</p>
      </div>
    </RouterLink>
  </div>
</template>

<script setup lang="ts">
import type { Menu } from '@/interfaces/main-base'
import { RouterLink } from 'vue-router'
import IconBase from '@/components/common/IconBase.vue'

defineProps<{ data: Menu }>()
</script>
