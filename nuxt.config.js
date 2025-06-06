import colors from 'vuetify/es5/util/colors'

export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '%s - CIMA',
    title: 'CIMA',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap'
      },
      {
        rel: 'stylesheet',
        href: 'https://cdnjs.cloudflare.com/ajax/libs/Swiper/5.4.5/css/swiper.min.css'
      }
    ]
  },

  // Estilos globales
  css: [],

  // Plugins (vacío por ahora)
  plugins: [],

  // Componentes autoimportados
  components: true,

  // Módulos para desarrollo y build
  buildModules: [
    '@nuxtjs/vuetify',
    '@nuxtjs/eslint-module'
  ],

  // Módulos Nuxt
  modules: [
    '@nuxtjs/axios'
  ],

  // Configuración de Axios
  axios: {},

  // Configuración de Vuetify
  vuetify: {
    defaultAssets: false, // para no cargar Roboto por defecto
    treeShake: true,
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: false,
      themes: {
        light: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        }
      }
    }
  },

  // Configuración de build
  build: {
  }
}
