<template>
  <div>
    <v-main class="pa-0">
      <v-container>
        <!-- Misión y Visión -->
        <!-- Misión -->
        <section class="mt-md-0 mt-0">
          <v-container>
            <v-row class="align-center my-3">
              <!-- Imagen Misión: Primero en mobile, segundo en desktop -->
              <v-col cols="12" md="6" class="order-1 order-md-1">
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

              <!-- Título Misión -->
              <v-col cols="12" md="6" class="order-2 order-md-1">
                <h2 class="text-h5 font-weight-bold">
                  {{ $t('nosotros.mision.titulo') }}
                </h2>
                <p class="mb-0" style="font-family: Poppins, sans-serif; text-align: justify; line-height: 1.8;">
                  {{ $t('nosotros.mision.texto') }}
                </p>
              </v-col>
            </v-row>
          </v-container>
        </section>

        <!-- Visión -->
        <section class="mt-md-2 mt-2">
          <v-container>
            <v-row class="align-center my-6">
              <!-- Imagen Visión: Primero en mobile, segundo en desktop -->
              <v-col cols="12" md="6" class="order-1 order-md-2">
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

              <!-- Título y descripción Visión -->
              <v-col cols="12" md="6" class="order-2 order-md-1">
                <h2 class="text-h5 font-weight-bold" :style="{ color: '#035928', fontFamily: 'Poppins, sans-serif' }">
                  {{ $t('nosotros.vision.titulo') }}
                </h2>
                <div style="font-family: Poppins, sans-serif; text-align: justify; line-height: 1.8;">
                  <p class="mb-2">{{ $t('nosotros.vision.descripcion') }}</p>
                  
                  <!-- CORREGIDO: Lista de puntos individuales -->
                  <ul class="vision-points">
                    <li>{{ $t('nosotros.vision.punto1') }}</li>
                    <li>{{ $t('nosotros.vision.punto2') }}</li>
                    <li>{{ $t('nosotros.vision.punto3') }}</li>
                    <li>{{ $t('nosotros.vision.punto4') }}</li>
                    <li>{{ $t('nosotros.vision.punto5') }}</li>
                    <li>{{ $t('nosotros.vision.punto6') }}</li>
                  </ul>
                </div>
              </v-col>
            </v-row>
          </v-container>
        </section>

        <!-- Valores -->
        <v-row class="my-10">
          <v-col cols="12">
            <h2 class="text-center">{{ $t('nosotros.valores.titulo') }}</h2>
          </v-col>
          <v-col
            v-for="(valor, i) in valores"
            :key="i"
            cols="12"
            sm="6"
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
          <p class="text-body-1 mb-6" :style="{ textAlign: 'center', lineHeight: '2' }">
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

        <!-- Debug Info (temporal) -->
        <!--
        <v-container v-if="showDebug" class="mt-8">
          <v-card class="pa-4" color="info">
            <v-card-title>
              🐛 Debug i18n - Página Nosotros
              <v-spacer></v-spacer>
              <v-btn icon @click="showDebug = false">
                <v-icon>mdi-close</v-icon>
              </v-btn>
            </v-card-title>
            <v-card-text>
              <p><strong>Idioma actual:</strong> {{ $i18n.locale }}</p>
              <p><strong>Misión título:</strong> "{{ $t('nosotros.mision.titulo') }}"</p>
              <p><strong>Visión título:</strong> "{{ $t('nosotros.vision.titulo') }}"</p>
              <p><strong>Primer valor:</strong> "{{ $t('nosotros.valores.innovacion') }}"</p>
              <p><strong>Primer ODS:</strong> "{{ $t('nosotros.ods.punto1') }}"</p>
            </v-card-text>
          </v-card>
        </v-container>
        -->

        <!-- Botón debug flotante -->
        <!--
        <v-fab-transition>
          <v-btn
            fab
            fixed
            bottom
            right
            small
            color="info"
            @click="showDebug = !showDebug"
            style="z-index: 1000;"
          >
            <v-icon>mdi-bug</v-icon>
          </v-btn>
        </v-fab-transition>
        -->
      </v-container>
    </v-main>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeIndex: null,
      showDebug: false, // Cambiar a false cuando funcione
      
      // Valores
      valores: [
        { icono: 'mdi-lightbulb-on-outline', texto: 'nosotros.valores.innovacion', color: '#005977' },
        { icono: 'mdi-hand-heart', texto: 'nosotros.valores.solidaridad', color: '#e3c77b' },
        { icono: 'mdi-leaf', texto: 'nosotros.valores.sostenibilidad', color: 'green' },
        { icono: 'mdi-account-group', texto: 'nosotros.valores.juventud', color: '#6F9CA6' },
        { icono: 'mdi-shield-check', texto: 'nosotros.valores.transparencia', color: '#A65224' },
        { icono: 'mdi-account-voice', texto: 'nosotros.valores.inclusion', color: '#ff7c00' }
      ],
      
      // ODS
      odsList: [
        { titulo: 'nosotros.ods.punto1', descripcion: 'nosotros.ods.descripcion1' },
        { titulo: 'nosotros.ods.punto2', descripcion: 'nosotros.ods.descripcion2' },
        { titulo: 'nosotros.ods.punto3', descripcion: 'nosotros.ods.descripcion3' },
        { titulo: 'nosotros.ods.punto4', descripcion: 'nosotros.ods.descripcion4' },
        { titulo: 'nosotros.ods.punto5', descripcion: 'nosotros.ods.descripcion5' },
        { titulo: 'nosotros.ods.punto6', descripcion: 'nosotros.ods.descripcion6' },
        { titulo: 'nosotros.ods.punto7', descripcion: 'nosotros.ods.descripcion7' },
        { titulo: 'nosotros.ods.punto8', descripcion: 'nosotros.ods.descripcion8' },
        { titulo: 'nosotros.ods.punto9', descripcion: 'nosotros.ods.descripcion9' }
      ],
      
      // Miembros del equipo
      miembros: [
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
    }
  },

  methods: {
    toggleItem(index) {
      this.activeIndex = this.activeIndex === index ? null : index
    }
  },

  mounted() {
    // Debug info cuando se monta el componente
    console.log('🌐 Página Nosotros i18n info:', {
      locale: this.$i18n.locale,
      locales: this.$i18n.locales,
      messages: Object.keys(this.$i18n.messages),
      messagesAvailable: !!this.$i18n.messages[this.$i18n.locale],
      misionTitulo: this.$t('nosotros.mision.titulo'),
      visionTitulo: this.$t('nosotros.vision.titulo')
    })
  },

  // Meta tags para SEO (sintaxis de Nuxt 2)
  head() {
    return {
      title: `${this.$t('nosotros.mision.titulo')} - CIMA A.C.`,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.$t('nosotros.mision.texto')
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: `${this.$t('nosotros.mision.titulo')} - CIMA A.C.`
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: this.$t('nosotros.mision.texto')
        }
      ]
    }
  }
}
</script>

<style scoped>
h2 {
  font-weight: bold;
  margin-bottom: 1rem;
  font-family: Poppins;
  color: #035928;
  font-size: 3rem;
}

h1 {
  font-size: 4rem;
  font-weight: 800;
  color: #035928;
  line-height: 1.1;
  margin-bottom: 1rem;
}

@media (max-width: 960px) {
  h1 {
    font-size: 2rem;
  }
}

.vision-points {
  list-style-type: disc;
  padding-left: 1.5rem;
  margin-top: 1rem;
}

.vision-points li {
  margin-bottom: 0.5rem;
  line-height: 1.6;
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
</style>
