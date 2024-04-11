// store/auth-info
import { defineStore } from 'pinia'
import { useUrls } from '~/composables/useUrls'

export interface IUserInfo {
  name: string
  email: string
  qrCode: string
  phone: string
}

export const useAuthInfo = defineStore('authInfo', () => {
  const userInfo = ref<IUserInfo | undefined>()

  // пути для запросов
  const { authUrls } = useUrls()
  const url = authUrls.value.userInfo

  const fetchUserInfo = async (): Promise<void> => {
    try {
      const res = await $fetch<{ user: IUserInfo }>(url)
      console.log('res', res)
      userInfo.value = res.user
    } catch (e) {
      console.log('Error fetchUserInfo', (e as Error).message)
    }
  }

  return {
    userInfo,
    fetchUserInfo
  }
})
