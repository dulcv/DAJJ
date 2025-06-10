<template>
  <v-app>
    <donacion />
  </v-app>
</template>

<script>
import donacion from './components/donacion.vue'

export default {
  name: 'App',

  components: {
    donacion,
  },

  data: () => ({
    //
  }),
};
</script>
