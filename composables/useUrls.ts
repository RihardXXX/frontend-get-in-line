// /auth/registration
// /auth/confirm/{confirmationCode}
// /auth/login
// /auth/logout
// /auth/user-info
// /auth/verify
interface IAuthUrls {
  registration: string
  confirm: (confirmationCode: string) => string
  login: string
  logout: string
  userInfo: string
  verify: string
}

interface IApiUrls {
  test: string
}

interface IUrls {
  authUrls: IAuthUrls
  apiUrls: IApiUrls
}

export const useUrls = () => {
  const config = useRuntimeConfig()

  // в режиме dev добавляем префикс сервер
  const baseURL = config.public.isDevelopment ? '/server' : '/'

  // ветки путей
  const authBase = '/auth'
  const apiBase = '/api'

  const urls = ref<IUrls>({
    authUrls: {
      registration: `${baseURL}${authBase}/registration`,
      confirm: (confirmationCode: string) => `${baseURL}${authBase}/confirm/${confirmationCode}`,
      login: `${baseURL}${authBase}/login`,
      logout: `${baseURL}${authBase}/logout`,
      userInfo: `${baseURL}${authBase}/user-info`,
      verify: `${baseURL}${authBase}/verify`
    },
    apiUrls: {
      test: apiBase + 'test'
    }
  })

  const authUrls = computed<IAuthUrls>(() => {
    return urls.value.authUrls
  })

  const apiUrls = computed<IApiUrls>(() => {
    return urls.value.apiUrls
  })

  return {
    authUrls,
    apiUrls
  }
}
