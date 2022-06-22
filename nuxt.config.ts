import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  typescript: {
    strict: true,
  },
  server: {
    port: 3000,
    https: true,
  },
  nitro: {
    preset: 'node-server',
  },
})
