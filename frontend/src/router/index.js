// src/router/index.js
import Vue from 'vue';
import Router from 'vue-router';

import Donacion from '@/components/donacion.vue'; // o donde esté tu componente

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/donacion',
      name: 'Donacion',
      component: Donacion,
    },
    {
      path: '*', // opcional: ruta por defecto
      redirect: '/donacion'
    }
  ]
});
