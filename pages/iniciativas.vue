<template>
  <div>
    <v-main class="pa-0">
      <!-- Hero Section -->
      <section class="hero-initiatives">
        <v-container>
          <div class="hero-content">
            <h1 class="hero-title">{{ $t('iniciativas.titulo') }}</h1>
            <p class="hero-subtitle">{{ $t('iniciativas.subtitulo') }}</p>
            <v-divider class="custom-divider my-4"></v-divider>
          </div>
        </v-container>
      </section>

      <!-- Initiatives Grid -->
      <section class="initiatives-section">
        <v-container>
          <v-row>
            <v-col
              v-for="(item, index) in iniciativasData"
              :key="index"
              cols="12"
              sm="6"
              md="4"
            >
              <v-card class="hover-card">
                <!-- Imagen arriba con título -->
                <v-img
                  :src="item.img"
                  height="200"
                  class="card-img"
                >
                  <div class="image-overlay"></div>
                  <v-card-title class="headline white--text">
                    {{ getInitiativeTitle(index) }}
                  </v-card-title>
                </v-img>

                <!-- Descripción corta siempre visible -->
                <v-card-text>
                  <h3>{{ getInitiativeShortDescription(index) }}</h3>
                </v-card-text>

                <!-- Descripción larga expandible -->
                <v-expand-transition>
                  <div v-if="item.expandido">
                    <v-card-text class="text--secondary">
                      {{ getInitiativeLongDescription(index) }}
                    </v-card-text>
                  </div>
                </v-expand-transition>

                <!-- Botón de ver más (expandir) -->
                <v-card-actions class="justify-end">
                  <v-btn 
                    outlined 
                    rounded 
                    @click="toggleExpansion(index)"
                    :aria-label="item.expandido ? $t('iniciativas.verMenos') : $t('iniciativas.verMas')"
                  >
                    <v-icon :color="item.expandido ? '#035928' : '#035928'">
                      {{ item.expandido ? 'mdi-chevron-up' : 'mdi-chevron-down' }}
                    </v-icon>
                    <span class="ml-1">
                      {{ item.expandido ? $t('iniciativas.verMenos') : $t('iniciativas.verMas') }}
                    </span>
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </section>
    </v-main>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // Solo las imágenes y estado de expansión
      iniciativasData: [
        {
          img: "https://th.bing.com/th/id/R.7025f7ee6c3d829d53da099f6f492544?rik=ic5g73Q9O4r3Mg&pid=ImgRaw&r=0",
          expandido: false,
        },
        {
          img: "https://tse4.mm.bing.net/th/id/OIP.uAitzOvsdkLOa7dGAFvrVgHaEK?rs=1&pid=ImgDetMain",
          expandido: false,
        },
        {
          img: "/img/campañadental.jpg",
          expandido: false,
        },
        {
          img: "/img/crecer.jpg",
          expandido: false,
        },
        {
          img: "/img/equipo.png",
          expandido: false,
        },
        {
          img: "/img/jornada.jpg",
          expandido: false,
        },
      ],
    };
  },

  computed: {
    iniciativasTranslated() {
      try {
        return this.$t('iniciativas.items') || []
      } catch (error) {
        console.error('Error obteniendo iniciativas traducidas:', error)
        return []
      }
    }
  },

  methods: {
    toggleExpansion(index) {
      this.$set(this.iniciativasData[index], 'expandido', !this.iniciativasData[index].expandido)
    },

    getInitiativeTitle(index) {
      try {
        const items = this.$t('iniciativas.items')
        return items[index]?.titulo || `Iniciativa ${index + 1}`
      } catch (error) {
        console.error('Error obteniendo título:', error)
        return `Iniciativa ${index + 1}`
      }
    },

    getInitiativeShortDescription(index) {
      try {
        const items = this.$t('iniciativas.items')
        return items[index]?.descripcionCorta || 'Descripción no disponible'
      } catch (error) {
        console.error('Error obteniendo descripción corta:', error)
        return 'Descripción no disponible'
      }
    },

    getInitiativeLongDescription(index) {
      try {
        const items = this.$t('iniciativas.items')
        return items[index]?.descripcionLarga || 'Descripción detallada no disponible'
      } catch (error) {
        console.error('Error obteniendo descripción larga:', error)
        return 'Descripción detallada no disponible'
      }
    },

    // Aplicar idioma guardado
    applyLanguage() {
      if (process.client && this.$language) {
        this.$language.apply()
      }
    }
  },

  mounted() {
    // Aplicar idioma guardado al montar
    this.applyLanguage()
    
    console.log('🌐 Página Iniciativas montada:', {
      locale: this.$i18n.locale,
      itemsCount: this.iniciativasTranslated.length,
      titulo: this.$t('iniciativas.titulo')
    })
  },

  // Meta tags para SEO (sintaxis de Nuxt 2)
  head() {
    return {
      title: `${this.$t('iniciativas.titulo')} - CIMA A.C.`,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.$t('iniciativas.subtitulo')
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: `${this.$t('iniciativas.titulo')} - CIMA A.C.`
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: this.$t('iniciativas.subtitulo')
        }
      ]
    }
  }
};
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap');

// Variables de colores
$primary: #035928;
$secondary: #1ca63f;
$accent: #A65224;
$light-bg: #ffffff;
$text-dark: #2a2a2a;
$text-muted: #555555;

* {
  font-family: "Poppins", sans-serif;
}

// Hero Section
.hero-initiatives {
  background: linear-gradient(
    135deg,
    rgba(3, 89, 40, 0.9) 0%,
    rgba(28, 166, 63, 0.8) 100%
  ),
  url('/img/hero-bg.jpg');
  background-size: cover;
  background-position: center;
  padding: 6rem 0 4rem;
  color: white;
  text-align: center;

  .hero-content {
    max-width: 800px;
    margin: 0 auto;
  }

  .hero-title {
    font-size: 4rem;
    font-weight: 800;
    line-height: 1.2;
    margin-bottom: 1rem;

    @media (max-width: 960px) {
      font-size: 2.5rem;
    }

    @media (max-width: 600px) {
      font-size: 2rem;
    }
  }

  .hero-subtitle {
    font-size: 1.3rem;
    opacity: 0.9;
    margin-bottom: 2rem;
    line-height: 1.6;

    @media (max-width: 600px) {
      font-size: 1.1rem;
    }
  }

  .custom-divider {
    background-color: white !important;
    height: 4px;
    width: 200px;
    margin: 2rem auto;
    border-radius: 2px;
    opacity: 0.8;
  }
}

// Initiatives Section
.initiatives-section {
  padding: 4rem 0;
  background: $light-bg;

  .hover-card {
    border-radius: 1rem;
    overflow: hidden;
    height: 100%;
    transition: all 0.3s ease;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);

    &:hover {
      transform: translateY(-0.5rem);
      box-shadow: 0 12px 24px rgba(0, 0, 0, 0.15);
    }

    .card-img {
      position: relative;
      transition: transform 0.3s ease;
      
      .image-overlay {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: linear-gradient(
          to bottom,
          rgba(0, 0, 0, 0.3) 0%,
          rgba(0, 0, 0, 0.7) 100%
        );
        z-index: 1;
      }
      
      .headline {
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        z-index: 2;
        background: transparent;
        font-weight: 700;
        font-size: 1.3rem;
        text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.8);
      }
    }

    &:hover .card-img {
      transform: scale(1.05);
    }

    h3 {
      font-size: 1.1rem;
      font-weight: 600;
      color: $primary;
      margin: 0.5rem 0;
      text-align: left;
      line-height: 1.4;
    }

    .text--secondary {
      font-size: 0.95rem;
      line-height: 1.6;
      text-align: justify;
      color: #666;
    }

    .v-btn {
      background: transparent !important;
      color: $primary !important;
      font-weight: 600;
      transition: all 0.3s ease;
      border: 2px solid $primary !important;

      &:hover {
        background: $primary !important;
        color: white !important;
        transform: translateY(-2px);
        box-shadow: 0 4px 12px rgba($primary, 0.3);
      }

      .v-icon {
        transition: color 0.3s ease;
      }

      &:hover .v-icon {
        color: white !important;
      }
    }

    .v-card-actions {
      padding: 1rem 1.5rem 1.5rem;
    }
  }
}

// CTA Section
.cta-section {
  background: linear-gradient(
    135deg,
    rgba(166, 82, 36, 0.9) 0%,
    rgba(3, 89, 40, 0.9) 100%
  );
  padding: 4rem 0;
  color: white;
  text-align: center;

  .cta-content {
    max-width: 600px;
    margin: 0 auto;

    h2 {
      font-size: 2.5rem;
      font-weight: 700;
      margin-bottom: 1rem;

      @media (max-width: 600px) {
        font-size: 2rem;
      }
    }

    p {
      font-size: 1.2rem;
      opacity: 0.9;
      margin-bottom: 2rem;
      line-height: 1.6;
    }

    .btn-primary {
      background-color: white !important;
      color: $primary !important;
      font-weight: 600;
      padding: 1rem 2rem;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
      transition: all 0.3s ease;

      &:hover {
        transform: translateY(-2px);
        box-shadow: 0 6px 16px rgba(0, 0, 0, 0.3);
      }
    }
  }
}

// Animaciones de entrada
.initiatives-section {
  .hover-card {
    animation: fadeInUp 0.6s ease forwards;
    opacity: 0;
    transform: translateY(30px);
  }

  @for $i from 1 through 6 {
    .hover-card:nth-child(#{$i}) {
      animation-delay: #{$i * 0.1}s;
    }
  }
}

@keyframes fadeInUp {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
