<template>
  <div>
    <v-container>
      <!-- Misión y Visión -->
<template>
  <!-- Misión -->
  <section class="hero-section mb-12">
    <v-container>
      <v-row :align="center" justify="center">
        <v-col cols="12" md="6" class="hero-text">
          <h1 class="text-h3 font-weight-bold" :style="{ color: '#035928', fontFamily: 'Poppins, sans-serif' }">
            {{ $t('nosotros.mision.titulo') }}
          </h1>
          <p style="font-family: Poppins, sans-serif; text-align: justify; line-height: 1.8;">
            {{ $t('nosotros.mision.texto') }}
          </p>
        </v-col>

        <v-col cols="12" md="6" class="pa-5">
          <v-hover v-slot="{ hover }">
            <transition name="fade-slide" mode="out-in">
              <v-img
                key="mision"
                src="/img/crecer.jpg"
                alt="Imagen Misión"
                height="300"
                contain
                class="rounded-lx shadow-lg transition-slow"
                :class="{ 'hover-scale': hover }"
              />
            </transition>
          </v-hover>
        </v-col>
      </v-row>
    </v-container>
  </section>

  <!-- Visión -->
  <section class="hero-section mt-12">
    <v-container>
      <v-row :align="center" justify="center">
        <v-col cols="12" md="6" class="pa-5">
          <v-hover v-slot="{ hover }">
            <transition name="fade-slide" mode="out-in">
              <v-img
                key="vision"
                src="/img/participacion.jpg"
                alt="Imagen Visión"
                height="300"
                contain
                class="rounded-lx shadow-lg transition-slow"
                :class="{ 'hover-scale': hover }"
              />
            </transition>
          </v-hover>
        </v-col>

        <v-col cols="12" md="6" class="hero-text">
          <h1 class="text-h3 font-weight-bold" :style="{ color: '#035928', fontFamily: 'Poppins, sans-serif' }">
            {{ $t('nosotros.vision.titulo') }}
          </h1>
          <div style="font-family: Poppins, sans-serif; text-align: justify; line-height: 1.8;">
            <p class="mb-2">{{ $t('nosotros.vision.descripcion') }}</p>
            <p>{{ $t('nosotros.vision.puntos') }}</p>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </section>
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
      <v-container class="my-12 text-center">
        <h2 class="text-center">{{ $t('nosotros.equipo.titulo') }}</h2>
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
            <p :style="{ lineHeight: '2' }" class="text-body-2">
              {{ $t(miembro.descripcion) }}
            </p>
          </v-col>
        </v-row>
      </v-container>
    </v-container>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const activeIndex = ref(null)
const toggleItem = (index) => {
  activeIndex.value = activeIndex.value === index ? null : index
}

// Valores
const valores = [
  { icono: 'mdi-lightbulb-on-outline', texto: 'nosotros.valores.innovacion', color: '#005977' },
  { icono: 'mdi-hand-heart', texto: 'nosotros.valores.solidaridad', color: '#e3c77b' },
  { icono: 'mdi-leaf', texto: 'nosotros.valores.sostenibilidad', color: 'green' },
  { icono: 'mdi-account-group', texto: 'nosotros.valores.juventud', color: '#6F9CA6' },
  { icono: 'mdi-shield-check', texto: 'nosotros.valores.transparencia', color: '#A65224' },
  { icono: 'mdi-account-voice', texto: 'nosotros.valores.inclusion', color: '#ff7c00' }
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

.igual-altura {
  display: flex;
  flex-direction: column;
  height: 100%;
}

.img-pequeña {
  height: 10px !important;
  object-fit: cover;
  border-radius: 4px;
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

.section-header {
  text-align: center;
  margin-bottom: 3rem;
}

/* Animación de entrada */
.fade-slide-enter-active {
  transition: all 0.6s ease;
}
.fade-slide-enter-from {
  opacity: 0;
  transform: translateY(30px);
}
.fade-slide-enter-to {
  opacity: 1;
  transform: translateY(0);
}

/* Hover */
.transition-slow {
  transition: transform 0.4s ease-in-out;
}
.hover-scale {
  transform: scale(1.05);
}

/* Redondeado y sombra */
.rounded-circle {
  border-radius: 999px;
}
.shadow-lg {
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
}


h1 {
    font-size: 4rem;
    font-weight: 800;
    color: #035928;
    line-height: 1.1;
    margin-bottom: 1rem;

    @media (max-width: 960px) {
      font-size: 2rem;
    }
  }
</style>