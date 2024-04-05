// https://nuxt.com/docs/api/configuration/nuxt-config

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
      baseURL: '' // Exposed to the frontend as well.
    }
  },
  // settings local dev server front
  devServer: {
    host: 'http://localhost',
    port: 3000
  }
})
