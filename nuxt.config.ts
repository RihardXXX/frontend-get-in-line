// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  devtools: { enabled: false },
  extends: ['@nuxt/ui-pro'],
  modules: ['@nuxt/ui', '@nuxtjs/stylelint-module'],
  css: ['~/assets/scss/bundle.scss'],
  // @ts-ignore
  colorMode: {
    preference: 'light'
  }
})
