<template>
  <div class="h-full">
    <slot />
    <UTabs
      :items="tabs"
      :modelValue="modelValue"
      @change="changeTabs"
      :ui="ui"
      :class="[
        'fixed bottom-0 left-0 w-full p-0',
        {
          'pointer-events-none opacity-80': isDisabled
        }
      ]"
    />
  </div>
</template>

<script setup lang="ts">
import { useFooterNotAuthStore } from '~/store/footer-not-auth'
import { storeToRefs } from 'pinia'

const footerNotAuthStore = useFooterNotAuthStore()
const { changeTabs } = footerNotAuthStore
const { tabs, modelValue, isDisabled } = storeToRefs(footerNotAuthStore)

const ui = {
  wrapper: 'relative space-y-2',
  container: 'relative w-full hidden',
  base: 'focus:outline-none',
  list: {
    base: 'relative',
    background: 'bg-gray-100 dark:bg-gray-800',
    rounded: 'rounded-none',
    shadow: '',
    padding: 'p-1',
    height: 'h-20',
    width: 'w-full',
    marker: {
      wrapper: 'absolute top-[4px] left-[4px] duration-200 ease-out focus:outline-none',
      base: 'w-full h-full',
      background: 'bg-white dark:bg-gray-900',
      rounded: 'rounded-md',
      shadow: 'shadow-sm'
    },
    tab: {
      base: 'relative inline-flex items-center justify-center flex-shrink-0 w-full ui-focus-visible:outline-0 ui-focus-visible:ring-2 ui-focus-visible:ring-primary-500 dark:ui-focus-visible:ring-primary-400 ui-not-focus-visible:outline-none focus:outline-none disabled:cursor-not-allowed disabled:opacity-75 transition-colors duration-200 ease-out',
      background: '',
      active: 'text-gray-900 dark:text-white pl-1 pr-1',
      inactive: 'text-gray-500 dark:text-gray-400 pl-1 pr-1',
      height: 'h-10',
      padding: 'px-10',
      size: 'text-3xl',
      font: 'font-medium',
      rounded: 'rounded-md',
      shadow: ''
    }
  }
}
</script>
