<template>
  <div>
    <v-container>
      <!-- Misión y Visión -->
      <template>
  <v-row :align="stretch">
    <v-col cols="12" md="6">
     <v-card
  ref="card1"
  class="pa-1 hover-zoom"
  style="display: flex; flex-direction: column; height: 100%;"
>

        <v-img src="img/participacion.jpg" height="200px"></v-img>
        <v-card-title
          class="text-h4 font-weight-bold"
          :style="{ color: '#035928', fontFamily: 'Poppins, sans-serif' }"
        >
          {{ $t('nosotros.mision.titulo') }}
        </v-card-title>
        <v-card-text
          :style="{ fontFamily: 'Poppins, sans-serif', textAlign: 'justify', lineHeight: '1.8' }"
        >
          {{ $t('nosotros.mision.texto') }}
        </v-card-text>
      </v-card>
    </v-col>

    <v-col cols="12" md="6">
      <v-card
        ref="card2"
        class="pa-1 hover-zoom"
        :style="{ display: 'flex', flexDirection: 'column' }"
      >
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
                <v-list-item-title> {{ $t(punto) }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row >
</template>


      <!-- Valores -->
      <v-row class="my-10">
        <v-col cols="12">
          <h2 class="text-center"> {{ $t('nosotros.valores.titulo') }}</h2>
        </v-col>
        <v-col
          v-for="(valor, i) in valores"
          :key="i"
          cols="6"
          md="4"
          class="text-center"
        >
          <v-card class="pa-7 rounded-xl pa-1 hover-zoom" style="border: 1px solid #6F9CA6;">
            <v-icon :color="valor.color" size="100">{{ valor.icono }}</v-icon>
            <p class="mt-2 text-h6 font-weight-bold" :style="{ color: valor.color }">
              {{ $t(valor.texto) }}
            </p>
          </v-card>
        </v-col>
      </v-row>

      <!-- Agenda 2030 -->
       <v-container class="my-12">
    <h2 class="text-center">{{ $t('nosotros.ods.titulo') }}</h2>

    <v-row>
      <v-col
        v-for="(ods, i) in odsList"
        :key="i"
        cols="12"
        sm="6"
        md="4"
        class="d-flex flex-column"
      >
        <v-card class="pa-3 hover-shadow" @click="toggleItem(i)">
          <div class="d-flex align-center">
            <v-icon color="green" left>
              {{ activeIndex === i ? 'mdi-minus-circle-outline' : 'mdi-plus-circle-outline' }}
            </v-icon>
            <span :style="{ fontFamily: 'Poppins, sans-serif', marginLeft: '8px' }">
              {{ $t(ods.titulo) }}
            </span>
          </div>

          <v-expand-transition>
            <div
              v-if="activeIndex === i"
              class="mt-2"
              :style="{ fontFamily: 'Poppins, sans-serif', lineHeight: '1.8', textAlign: 'justify' }"
            >
              {{ $t(ods.descripcion) }}
            </div>
          </v-expand-transition>
        </v-card>
      </v-col>
    </v-row>
      </v-container>

      <!-- Equipo -->
      <v-container class="my-12 text-center ">
        <h2 class="text-center"> {{ $t('nosotros.equipo.titulo') }}</h2>
        <p class="text-body-1 mb-6" :style="{ textAlign: 'justify', lineHeight: '2' }">
          {{ $t('nosotros.equipo.descripcion') }}
        </p>
        <v-row class="my-20" style="row-gap: 25px;">
          <v-col 
            v-for="(miembro, index) in miembros"
            :key="index"
            cols="12"
            sm="6"
            md="4"
            class="text-center px-10 hover-zoom"
          >
            <v-img
              :src="miembro.imagen"
              height="300px"
              class="rounded-lg elevation-2 pa-10"
            />
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
import { ref, onMounted, onBeforeUnmount, nextTick } from '@nuxtjs/composition-api'

// Refs para las tarjetas
const card1 = ref(null)
const card2 = ref(null)

// Función para igualar alturas
function igualarAlturas() {
  nextTick(() => {
    setTimeout(() => {
      if (card1.value && card2.value) {
        card1.value.style.height = 'auto'
        card2.value.style.height = 'auto'

        const altura1 = card1.value.offsetHeight
        const altura2 = card2.value.offsetHeight
        const alturaMax = Math.max(altura1, altura2)

        card1.value.style.height = `${alturaMax}px`
        card2.value.style.height = `${alturaMax}px`
      }
    }, 100) // da tiempo a que las imágenes carguen
  })
}

// Ejecutar en mounted y resize
onMounted(() => {
  igualarAlturas()
  window.addEventListener('resize', igualarAlturas)
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', igualarAlturas)
})


// Valores
const valores = [
  { icono: 'mdi-lightbulb-on-outline', texto: 'nosotros.valores.innovacion', color: '#005977' },
  { icono: 'mdi-hand-heart', texto: 'nosotros.valores.solidaridad', color: '#e3c77b' },
  { icono: 'mdi-leaf', texto: 'nosotros.valores.sostenibilidad', color: 'green' },
  { icono: 'mdi-account-group', texto: 'nosotros.valores.juventud', color: '#6F9CA6' },
  { icono: 'mdi-shield-check', texto: 'nosotros.valores.transparencia', color: '#A65224' },
  { icono: 'mdi-account-voice', texto: 'nosotros.valores.inclusion', color: '#ff7c00' }
]

// Visión
const visionPuntos = [
  'nosotros.vision.punto1',
  'nosotros.vision.punto2',
  'nosotros.vision.punto3',
  'nosotros.vision.punto4',
  'nosotros.vision.punto5',
  'nosotros.vision.punto6'
]

// ODS
const odsList = [
  { titulo: 'nosotros.ods.punto1', descripcion: 'nosotros.ods.descripcion1' },
  { titulo: 'nosotros.ods.punto2', descripcion: 'nosotros.ods.descripcion2' },
  { titulo: 'nosotros.ods.punto3', descripcion: 'nosotros.ods.descripcion3' },
  { titulo: 'nosotros.ods.punto4', descripcion: 'nosotros.ods.descripcion4' },
  { titulo: 'nosotros.ods.punto5', descripcion: 'nosotros.ods.descripcion5' },
  { titulo: 'nosotros.ods.punto6', descripcion: 'nosotros.ods.descripcion6' },
  { titulo: 'nosotros.ods.punto7', descripcion: 'nosotros.ods.descripcion7' },
  { titulo: 'nosotros.ods.punto8', descripcion: 'nosotros.ods.descripcion8' },
  { titulo: 'nosotros.ods.punto9', descripcion: 'nosotros.ods.descripcion9' }
]

const activeIndex = ref(null)
function toggleItem(index) {
  activeIndex.value = activeIndex.value === index ? null : index
}

// Miembros del equipo
const miembros = [
  {
    imagen: '/img/campañadental.jpg',
    titulo: 'nosotros.miembros.presidente.titulo',
    descripcion: 'nosotros.miembros.presidente.descripcion'
  },
  {
    imagen: '/img/campañadental.jpg',
    titulo: 'nosotros.miembros.secretario.titulo',
    descripcion: 'nosotros.miembros.secretario.descripcion'
  },
  {
    imagen: '/img/campañadental.jpg',
    titulo: 'nosotros.miembros.tesorero.titulo',
    descripcion: 'nosotros.miembros.tesorero.descripcion'
  },
  {
    imagen: '/img/campañadental.jpg',
    titulo: 'nosotros.miembros.operaciones.titulo',
    descripcion: 'nosotros.miembros.operaciones.descripcion'
  },
  {
    imagen: '/img/campañadental.jpg',
    titulo: 'nosotros.miembros.comunicacion.titulo',
    descripcion: 'nosotros.miembros.comunicacion.descripcion'
  },
  {
    imagen: '/img/campañadental.jpg',
    titulo: 'nosotros.miembros.finanzas.titulo',
    descripcion: 'nosotros.miembros.finanzas.descripcion'
  }
]
</script>



<style scoped>
h2 {
  font-weight: bold;
  margin-bottom: 1rem;
  font-family: Poppins;
  color: #035928;
  font-size: 3rem;
}

.hover-zoom {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}
.hover-zoom:hover {
  transform: scale(1.03);
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.2);
}

.hover-shadow {
  transition: box-shadow 0.3s ease;
}
.hover-shadow:hover {
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.2);
}
</style>
