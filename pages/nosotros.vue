<template>
  <div>
    <v-main class="pa-0">
      <!-- Hero Section -->
      <section class="hero-section">
        <v-container class="py-16">
          <div class="text-center">
            <h1 class="display-2 font-weight-bold white--text mb-6">
              {{ $t('nosotros.hero.titulo') }}
            </h1>
            <p class="headline white--text font-weight-light max-width-text mx-auto">
              {{ $t('nosotros.hero.subtitulo') }}
            </p>
          </div>
        </v-container>
      </section>

      <v-container class="section-spacing">
        <!-- Misión y Visión -->
        <section class="mb-16">
          <!-- Misión -->
          <v-row class="align-center mb-12" no-gutters>
            <v-col cols="12" md="6" class="pa-4">
              <div class="d-flex align-center mb-4">
                <v-icon color="green darken-2" size="40" class="mr-3">mdi-target</v-icon>
                <h2 class="section-title">{{ $t('nosotros.mision.titulo') }}</h2>
              </div>
              <p class="text-body-1 text-justify line-height-relaxed">
                {{ $t('nosotros.mision.texto') }}
              </p>
            </v-col>
            <v-col cols="12" md="6" class="pa-4">
              <v-hover v-slot="{ hover }">
                <v-img
                  src="/img/crecer.jpg"
                  alt="Imagen Misión"
                  height="400"
                  class="rounded-xl elevation-8 image-hover"
                  :class="{ 'image-scale': hover }"
                />
              </v-hover>
            </v-col>
          </v-row>

          <!-- Visión -->
          <v-row class="align-center mb-12" no-gutters>
            <v-col cols="12" md="6" order="2" order-md="1" class="pa-4">
              <v-hover v-slot="{ hover }">
                <v-img
                  src="/img/participacion.jpg"
                  alt="Imagen Visión"
                  height="400"
                  class="rounded-xl elevation-8 image-hover"
                  :class="{ 'image-scale': hover }"
                />
              </v-hover>
            </v-col>
            <v-col cols="12" md="6" order="1" order-md="2" class="pa-4">
              <div class="d-flex align-center mb-4">
                <v-icon color="green darken-2" size="40" class="mr-3">mdi-eye</v-icon>
                <h2 class="section-title">{{ $t('nosotros.vision.titulo') }}</h2>
              </div>
              <p class="text-body-1 text-justify line-height-relaxed mb-4">
                {{ $t('nosotros.vision.descripcion') }}
              </p>
              <ul class="vision-points">
                <li>{{ $t('nosotros.vision.punto1') }}</li>
                <li>{{ $t('nosotros.vision.punto2') }}</li>
                <li>{{ $t('nosotros.vision.punto3') }}</li>
                <li>{{ $t('nosotros.vision.punto4') }}</li>
                <li>{{ $t('nosotros.vision.punto5') }}</li>
                <li>{{ $t('nosotros.vision.punto6') }}</li>
              </ul>
            </v-col>
          </v-row>
        </section>

        <!-- Valores -->
        <section class="mb-16">
          <div class="text-center mb-12">
            <h2 class="section-title mb-4">{{ $t('nosotros.valores.titulo') }}</h2>
            <p class="text-h6 grey--text max-width-text mx-auto">
              {{ $t('nosotros.valores.subtitulo') }}
            </p>
          </div>

          <v-row>
            <v-col
              v-for="(valor, i) in valores"
              :key="i"
              cols="12"
              sm="6"
              md="4"
              class="mb-4"
            >
              <v-card class="valor-card pa-6 text-center h-100" elevation="2">
                <v-avatar size="80" :color="valor.color" class="mb-4">
                  <v-icon size="40" color="white">{{ valor.icono }}</v-icon>
                </v-avatar>
                <h3 class="text-h6 font-weight-bold mb-3">
                  {{ $t(valor.texto) }}
                </h3>
                <p class="text-body-2 grey--text">
                  {{ $t(valor.descripcion) }}
                </p>
              </v-card>
            </v-col>
          </v-row>
        </section>

        <!-- Agenda 2030 -->
        <section class="mb-16">
          <div class="text-center mb-12">
            <h2 class="section-title mb-4">{{ $t('nosotros.ods.titulo') }}</h2>
            <p class="text-h6 grey--text max-width-text mx-auto">
              {{ $t('nosotros.ods.subtitulo') }}
            </p>
          </div>

          <v-row>
            <v-col
              v-for="(ods, i) in odsList"
              :key="i"
              cols="12"
              sm="6"
              md="4"
              class="mb-3"
            >
              <v-card class="ods-card" elevation="2">
                <v-card-text class="pa-0">
                  <v-btn
                    text
                    block
                    class="pa-6 text-left justify-space-between"
                    @click="toggleItem(i)"
                  >
                    <div class="d-flex align-center">
                      <v-chip
                        small
                        color="green lighten-4"
                        text-color="green darken-2"
                        class="mr-3"
                      >
                        {{ i + 1 }}
                      </v-chip>
                      <span class="font-weight-medium">{{ $t(ods.titulo) }}</span>
                    </div>
                    <v-icon color="green darken-2">
                      {{ activeIndex === i ? 'mdi-chevron-up' : 'mdi-chevron-down' }}
                    </v-icon>
                  </v-btn>

                  <v-expand-transition>
                    <div v-if="activeIndex === i" class="px-6 pb-6">
                      <p class="text-body-2 grey--text text--darken-1 line-height-relaxed">
                        {{ $t(ods.descripcion) }}
                      </p>
                    </div>
                  </v-expand-transition>
                </v-card-text>
              </v-card>
            </v-col>
          </v-row>
        </section>

        <!-- Equipo -->
        <section class="mb-16">
          <div class="text-center mb-12">
            <h2 class="section-title mb-4">{{ $t('nosotros.equipo.titulo') }}</h2>
            <p class="text-h6 grey--text max-width-text mx-auto">
              {{ $t('nosotros.equipo.descripcion') }}
            </p>
          </div>

          <v-row>
            <v-col
              v-for="(miembro, index) in miembros"
              :key="index"
              cols="12"
              sm="6"
              md="4"
              class="mb-6"
            >
              <v-card class="team-card" elevation="2">
                <div class="image-container">
                  <v-img
                    :src="miembro.imagen"
                    height="250"
                    class="team-image"
                  >
                    <template v-slot:placeholder>
                      <v-skeleton-loader type="image"></v-skeleton-loader>
                    </template>
                  </v-img>
                </div>
                <v-card-text class="text-center pa-6">
                  <h3 class="text-h6 font-weight-bold orange--text text--darken-2 mb-2">
                    {{ $t(miembro.titulo) }}
                  </h3>
                  <v-chip
                    small
                    outlined
                    color="green darken-2"
                    class="mb-3"
                  >
                    {{ $t(miembro.rol) }}
                  </v-chip>
                  <p class="text-body-2 grey--text line-height-relaxed">
                    {{ $t(miembro.descripcion) }}
                  </p>
                </v-card-text>
              </v-card>
            </v-col>
          </v-row>
        </section>
      </v-container>
    </v-main>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeIndex: null,
      // Valores con descripciones
      valores: [
        { 
          icono: 'mdi-lightbulb-on-outline', 
          texto: 'nosotros.valores.innovacion', 
          descripcion: 'nosotros.valores.innovacion.descripcion',
          color: '#005977' 
        },
        { 
          icono: 'mdi-hand-heart', 
          texto: 'nosotros.valores.solidaridad', 
          descripcion: 'nosotros.valores.solidaridad.descripcion',
          color: '#e3c77b' 
        },
        { 
          icono: 'mdi-leaf', 
          texto: 'nosotros.valores.sostenibilidad', 
          descripcion: 'nosotros.valores.sostenibilidad.descripcion',
          color: 'green' 
        },
        { 
          icono: 'mdi-account-group', 
          texto: 'nosotros.valores.juventud', 
          descripcion: 'nosotros.valores.juventud.descripcion',
          color: '#6F9CA6' 
        },
        { 
          icono: 'mdi-shield-check', 
          texto: 'nosotros.valores.transparencia', 
          descripcion: 'nosotros.valores.transparencia.descripcion',
          color: '#A65224' 
        },
        { 
          icono: 'mdi-account-voice', 
          texto: 'nosotros.valores.inclusion', 
          descripcion: 'nosotros.valores.inclusion.descripcion',
          color: '#ff7c00' 
        }
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
          rol: 'nosotros.miembros.presidente.rol',
          descripcion: 'nosotros.miembros.presidente.descripcion'
        },
        {
          imagen: '/img/campañadental.jpg',
          titulo: 'nosotros.miembros.secretario.titulo',
          rol: 'nosotros.miembros.secretario.rol',
          descripcion: 'nosotros.miembros.secretario.descripcion'
        },
        {
          imagen: '/img/campañadental.jpg',
          titulo: 'nosotros.miembros.tesorero.titulo',
          rol: 'nosotros.miembros.tesorero.rol',
          descripcion: 'nosotros.miembros.tesorero.descripcion'
        },
        {
          imagen: '/img/campañadental.jpg',
          titulo: 'nosotros.miembros.operaciones.titulo',
          rol: 'nosotros.miembros.operaciones.rol',
          descripcion: 'nosotros.miembros.operaciones.descripcion'
        },
        {
          imagen: '/img/campañadental.jpg',
          titulo: 'nosotros.miembros.comunicacion.titulo',
          rol: 'nosotros.miembros.comunicacion.rol',
          descripcion: 'nosotros.miembros.comunicacion.descripcion'
        },
        {
          imagen: '/img/campañadental.jpg',
          titulo: 'nosotros.miembros.finanzas.titulo',
          rol: 'nosotros.miembros.finanzas.rol',
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
  head() {
    return {
      title: `${this.$t('nosotros.mision.titulo')} - CIMA A.C.`,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.$t('nosotros.mision.texto')
        }
      ]
    }
  }
}
</script>

<style scoped>
/* Hero Section */
.hero-section {
  background: linear-gradient(135deg, #2E7D32 0%, #388E3C 100%);
  min-height: 400px;
  display: flex;
  align-items: center;
}

/* Secciones */
.section-spacing {
  padding: 60px 0;
}

.section-title {
  font-size: 2.5rem;
  font-weight: 700;
  color: #2E7D32;
  font-family: 'Poppins', sans-serif;
}

.max-width-text {
  max-width: 600px;
}

.line-height-relaxed {
  line-height: 1.8;
}

/* Imágenes */
.image-hover {
  transition: transform 0.4s ease;
  overflow: hidden;
}

.image-scale {
  transform: scale(1.05);
}

/* Cards de valores */
.valor-card {
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  border-radius: 16px;
  height: 100%;
}

.valor-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 12px 20px rgba(0,0,0,0.15) !important;
}

/* Cards de ODS */
.ods-card {
  border-radius: 12px;
  overflow: hidden;
  transition: box-shadow 0.3s ease;
}

.ods-card:hover {
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15) !important;
}

/* Cards del equipo */
.team-card {
  border-radius: 16px;
  overflow: hidden;
  transition: all 0.3s ease;
  height: 100%;
}

.team-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 20px 40px rgba(0,0,0,0.1) !important;
}

.image-container {
  overflow: hidden;
}

.team-image {
  transition: transform 0.5s ease;
}

.team-card:hover .team-image {
  transform: scale(1.1);
}

/* Lista de visión */
.vision-points {
  list-style: none;
  padding-left: 0;
}

.vision-points li {
  position: relative;
  padding-left: 24px;
  margin-bottom: 12px;
  line-height: 1.6;
}

.vision-points li::before {
  content: '';
  position: absolute;
  left: 0;
  top: 8px;
  width: 8px;
  height: 8px;
  background-color: #4CAF50;
  border-radius: 50%;
}

/* Responsive */
@media (max-width: 960px) {
  .section-title {
    font-size: 2rem;
  }
  
  .hero-section {
    min-height: 300px;
    padding: 40px 0;
  }
}
</style>