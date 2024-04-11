// store/change-layouts
import { defineStore } from 'pinia'

export const useChangeLayouts = defineStore('stateLayouts', () => {
  // типы шаблонов
  type Layouts = 'auth' | 'default'

  const layout = ref<Layouts>('auth')

  const changeLayout = (newLayout: Layouts): void => {
    layout.value = newLayout
  }

  return {
    layout,
    changeLayout
  }
})
