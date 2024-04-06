// https://nuxt.com/docs/api/configuration/nuxt-config

const isDevelopment = (process.env.NODE_ENV === 'development') as boolean

// сервер куда будем стучаться
const baseUrlProxy = process.env.NUXT_PUBLIC_BASE_URL

// все запросы с фронта в режиме дев будут проксироваться и отправляться к бэку локальному 'http://localhost:3030/**'
const getPoxy = (isDevelopment: boolean): object => {
  return isDevelopment ? { '/server/**': { proxy: `${baseUrlProxy}/**` } } : null
}

// базовая конфигурация
export default defineNuxtConfig({
  devtools: { enabled: false },
  extends: ['@nuxt/ui-pro'],
  modules: ['@nuxt/ui', '@nuxtjs/stylelint-module', '@pinia/nuxt'],
  css: ['~/assets/scss/bundle.scss'],
  colorMode: {
    preference: 'light'
  },
  runtimeConfig: {
    apiKey: '', // Default to an empty string, automatically set at runtime using process.env.NUXT_API_KEY
    public: {
      baseURL: '', // Exposed to the frontend as well.
      isDevelopment
    }
  },
  // settings local dev server front
  devServer: {
    host: 'http://localhost',
    port: 3000
  },
  // эту настройку включать только в дев режиме
  nitro: {
    routeRules: {
      // '/blog/**': { swr: true },
      // '/blog/**': { swr: 600 },
      // '/blog/**': { static: true },
      // '/blog/**': { cache: { /* cache options*/ } },
      // '/assets/**': { headers: { 'cache-control': 's-maxage=0' } },
      // '/api/v1/**': { cors: true, headers: { 'access-control-allow-methods': 'GET' } },
      // '/old-page': { redirect: '/new-page' }, // uses status code 307 (Temporary Redirect)
      // '/old-page2': { redirect: { to:'/new-page2', statusCode: 301 } },
      // '/old-page/**': { redirect: '/new-page/**' },
      // '/proxy/example': { proxy: 'http://localhost:3030' },
      ...getPoxy(isDevelopment)
    }
  }
})
