<template>
  <div class="h-full">
    <TheBaseNotifications />
    <NuxtLayout :name="layout">
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
// You might choose this based on an API call or logged-in status
import TheBaseNotifications from '~/components/ui/TheBaseNotifications.vue'
import { useChangeLayouts } from '~/store/change-layouts'

const { layout } = useChangeLayouts()
</script>
