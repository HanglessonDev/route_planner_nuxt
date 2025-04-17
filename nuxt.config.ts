// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },

  modules: [
    '@nuxt/eslint',
    '@nuxt/fonts',
    '@nuxt/icon',
    '@nuxt/image',
    '@nuxt/test-utils',
    '@vite-pwa/nuxt',
  ],
  pwa: {
    manifest: {
      name: 'Meu Planejador de Rotas',
      short_name: 'Planejador de Rotas',
      description: 'Um aplicativo para planejar suas rotas de entregas.',
      start_url: '/',
      display: 'standalone',
      // background_color: '#ffffff', // Cor de fundo da splash screen
      // theme_color: '#4DBA87', // Cor da barra de status (deve combinar com o tema do app)
      orientation: 'any',
      lang: 'pt-BR',
      icons: [
        {
          src: 'icons/pwa/android-launchericon-512-512.png',
          sizes: '512x512',
          type: 'image/png',
        },
        {
          src: 'icons/pwa/android-launchericon-192-192.png',
          sizes: '192x192',
          type: 'image/png',
        },
        {
          src: 'icons/pwa/android-launchericon-144-144.png',
          sizes: '144x144',
          type: 'image/png',
        },
        {
          src: 'icons/pwa/android-launchericon-96-96.png',
          sizes: '96x96',
          type: 'image/png',
        },
        {
          src: 'icons/pwa/android-launchericon-72-72.png',
          sizes: '72x72',
          type: 'image/png',
        },
        {
          src: 'icons/pwa/android-launchericon-48-48.png',
          sizes: '48x48',
          type: 'image/png',
        },
      ],
    },
    workbox: {
      navigateFallback: '/',
    },
    devOptions: {
      enabled: true,
      type: 'module',
      suppressWarnings: true,
    },
  },
});
