<template>
  <div>
    <v-container>
      <!-- Misión y Visión -->
      <v-row>
        <v-col cols="12" md="6">
          <v-card class="pa-1">
            <v-img src="img/participacion.jpg" height="200px"></v-img>
            <v-card-title
              class="text-h4 font-weight-bold"
              :style="{ color: '#035928', fontFamily: 'Poppins, sans-serif' }"
            >
               {{ $t('nosotros.mision.titulo') }}
            </v-card-title>
            <v-card-text
              :style="{ fontFamily: 'Poppins, sans-serif', textAlign: 'justify', lineHeight: '3' }"
            >
              {{ $t('nosotros.mision.texto') }}
            </v-card-text>
          </v-card>
        </v-col>

        <v-col cols="12" md="6">
          <v-card class="pa-1">
            <v-img src="img/crecer.jpg" height="200px"></v-img>
            <v-card-title
              class="text-h4 font-weight-bold"
              :style="{ color: '#035928', fontFamily: 'Poppins, sans-serif' }"
            >
             {{ $t('nosotros.vision.titulo') }}
            </v-card-title>
            <v-card-text>
              <p
                class="mb-2"
                :style="{ fontFamily: 'Poppins, sans-serif', textAlign: 'justify', lineHeight: '1.8' }"
              >
                  {{ $t('nosotros.vision.descripcion') }}
              </p>
              <v-list dense>
                <v-list-item v-for="(punto, i) in visionPuntos" :key="i">
                  <v-list-item-icon>
                    <v-icon color="#1CA63F">mdi-check</v-icon>
                  </v-list-item-icon>
                  <v-list-item-content>
                    <v-list-item-title>  {{ $t(punto) }}</v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
              </v-list>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>

      <!-- Valores -->
      <v-row class="my-10">
        <v-col cols="12">
          <h2 class="text-center">  {{ $t('nosotros.valores.titulo') }}</h2>
        </v-col>
        <v-col
          v-for="(valor, i) in valores"
          :key="i"
          cols="6"
          md="4"
          class="text-center"
        >
          <v-card class="pa-7 rounded-xl" style="border: 1px solid #6F9CA6;">
            <v-icon :color="valor.color" size="100">{{ valor.icono }}</v-icon>
            <p class="mt-2 text-h6 font-weight-bold" :style="{ color: valor.color }">
             {{ $t(valor.texto) }}
            </p>
          </v-card>
        </v-col>
      </v-row>

      <!-- Agenda 2030 -->
      <v-row>
        <v-col cols="12">
          <h2 class="text-center">Agenda 2030</h2>
          <v-list>
            <v-list-item v-for="(ods, i) in odsList" :key="i">
              <v-list-item-icon>
                <v-icon color="green">mdi-plus-circle</v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title>{{ $t(ods) }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-col>
      </v-row>

      <!-- Equipo -->
      <v-container class="my-12 text-center">
        <h2 class="text-center"> {{ $t('nosotros.equipo.titulo') }}</h2>
        <p class="text-body-1 mb-6" :style="{ textAlign: 'justify', lineHeight: '2' }">
           {{ $t('nosotros.equipo.descripcion') }}
        </p>
        <v-row>
          <v-col
            v-for="(miembro, index) in miembros"
            :key="index"
            cols="12"
            sm="6"
            md="4"
            class="text-center"
          >
            <v-img
              :src="miembro.imagen"
              aspect-ratio="1"
              class="rounded-lg elevation-2"
            ></v-img>
            <h3 class="mt-4 font-weight-bold text-h5" :style="{ color: '#A65224' }">
            {{ $t(miembro.titulo) }}
            </h3>
            <p :style="{ lineHeight: '2' }" class="text-body-2">{{ $t(miembro.descripcion) }}</p>
          </v-col>
        </v-row>
      </v-container>
    </v-container>
  </div>
</template>

<script setup>
const valores = [
  { icono: 'mdi-lightbulb-on-outline', texto: 'nosotros.valores.innovacion', color: '#005977' },
  { icono: 'mdi-hand-heart', texto: 'nosotros.valores.solidaridad', color: '#e3c77b' },
  { icono: 'mdi-leaf', texto: 'nosotros.valores.sostenibilidad', color: 'green' },
  { icono: 'mdi-account-group', texto: 'nosotros.valores.juventud', color: '#6F9CA6' },
  { icono: 'mdi-shield-check', texto: 'nosotros.valores.transparencia', color: '#A65224' },
  { icono: 'mdi-account-voice', texto: 'nosotros.valores.inclusion', color: '#ff7c00' }
];


const visionPuntos = [
  'nosotros.vision.punto1',
  'nosotros.vision.punto2',
  'nosotros.vision.punto3',
  'nosotros.vision.punto4',
  'nosotros.vision.punto5',
  'nosotros.vision.punto6'
];

const odsList = [
  'nosotros.ods.punto1',
  'nosotros.ods.punto2',
  'nosotros.ods.punto3',
  'nosotros.ods.punto4',
  'nosotros.ods.punto5',
  'nosotros.ods.punto6',
  'nosotros.ods.punto7',
  'nosotros.ods.punto8',
  'nosotros.ods.punto9'
];

const miembros = [
  {
    imagen: '/img/equipo1.jpg',
    titulo: 'nosotros.miembros.presidente.titulo',
    descripcion: 'nosotros.miembros.presidente.descripcion'
  },
  {
    imagen: '/img/campañadental.jpg',
    titulo: 'nosotros.miembros.secretario.titulo',
    descripcion: 'nosotros.miembros.secretario.descripcion'
  },
  {
    imagen: '/img/equipo3.jpg',
    titulo: 'nosotros.miembros.tesorero.titulo',
    descripcion: 'nosotros.miembros.tesorero.descripcion'
  },
  {
    imagen: '/img/equipo4.jpg',
    titulo: 'nosotros.miembros.operaciones.titulo',
    descripcion: 'nosotros.miembros.operaciones.descripcion'
  },
  {
    imagen: '/img/equipo5.jpg',
    titulo: 'nosotros.miembros.comunicacion.titulo',
    descripcion: 'nosotros.miembros.comunicacion.descripcion'
  },
  {
    imagen: '/img/equipo6.jpg',
    titulo: 'nosotros.miembros.finanzas.titulo',
    descripcion: 'nosotros.miembros.finanzas.descripcion'
  }
];


</script>

<style scoped>
h2 {
  font-weight: bold;
  margin-bottom: 1rem;
  font-family: Poppins;
  color: #035928;
  font-size: 30px;
}
</style>
