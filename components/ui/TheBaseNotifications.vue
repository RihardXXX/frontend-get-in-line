<template>
  <UNotifications :ui="NotificationUiConfig">
    <template #title="{ title }">
      <h1 class="!text-stone-300 text-3xl text-center">
        {{ title }}
      </h1>
    </template>

    <template #description="{ description }">
      <p class="text-slate-50 text-2xl mt-3.5">
        {{ description }}
      </p>
    </template>
  </UNotifications>
</template>

<script setup lang="ts">
import { NotificationUiConfig } from '~/uiStyleConfig/components/NotificationUiConfig'
</script>
