// store/footer-not-auth.ts
import { defineStore } from 'pinia'

export const useFooterNotAuthStore = defineStore('footerNotAuthStore', () => {
  const tabs = ref([
    {
      label: 'главная',
      value: ''
    },
    {
      label: 'регистрация',
      value: 'registration'
    },
    {
      label: 'авторизация',
      value: 'authorization'
    }
  ])

  const modelValue = ref(0)
  const isDisabled = ref(false)

  async function changeTabs (index: number) {
    const page = tabs.value[index]

    if (!page) {
      return
    }

    modelValue.value = index
    await navigateTo(page.value)
  }

  function setDisabledTab (status = false) {
    isDisabled.value = status
  }

  return { tabs, changeTabs, modelValue, setDisabledTab, isDisabled }
})
