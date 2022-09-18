import wasm from 'vite-plugin-wasm'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  vite: {
    build: {
      target: 'esnext',
    },
    plugins: [wasm()],
    server: {
      watch: {
        usePolling: true,
      },
    },
  },
})
