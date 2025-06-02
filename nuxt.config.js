import colors from 'vuetify/es5/util/colors'

export default {
  // Desactiva SSR y usa modo estático
  ssr: false,
  target: 'static',

  // Encabezados globales
  head: {
    titleTemplate: '%s - proyectoCIMA',
    title: 'proyectoCIMA',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },

  // Estilos globales
  css: ['swiper/swiper-bundle.css'],

  // Plugins (vacío por ahora)
  plugins: [],

  // Componentes autoimportados
  components: true,

  // Módulos para desarrollo y build
  buildModules: [
    '@nuxtjs/eslint-module',
    '@nuxtjs/vuetify'
  ],

  // Módulos Nuxt
  modules: [
    '@nuxtjs/axios'
  ],

  // Configuración de Axios
  axios: {},

  // Configuración de Vuetify
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: false,
      themes: {
        dark: {
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
  build: {}
}
