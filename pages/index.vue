<template>
  <v-app>
    <CarouselComponent />

    <!-- Sección sobre cima -->
    <section class="hero-section">
      <v-container>
        <v-row align="center" justify="center">
          <!-- Texto principal -->
          <v-col cols="12" md="6" class="hero-text">
            <h1>{{ $t('index.quienesSomos.titulo') }}</h1>
            <p class="description">
              {{ $t('index.quienesSomos.descripcion') }}
            </p>
            <!-- Botón visible  en escritorio -->
            <div class="actions d-none d-md-flex">
              <v-btn color="#035928" large rounded class="btn-primary" to="/nosotros">
                {{ $t('index.quienesSomos.boton') }}
                <v-icon right>mdi-arrow-right</v-icon>
              </v-btn>
            </div>
          </v-col>

          <!-- Imagen del hero -->
          <v-col cols="12" md="6" class="hero-image-wrapper">
            <v-hover v-slot="{ hover }">
              <div class="image-container" :class="{ hovered: hover }">
                <div class="image-bg"></div>
                <v-img src="/cima-logo.jpg" contain class="main-image" alt="Logo CIMA" />
                <div class="image-border"></div>
              </div>
            </v-hover>
          </v-col>

          <!-- Botón para móvil -->
          <div class="actions d-flex d-md-none" style="margin-top: 1.5rem; justify-content: flex-end">
            <v-btn color="#035928" large rounded class="btn-primary" to="/nosotros">
              {{ $t('index.quienesSomos.boton') }}
              <v-icon right>mdi-arrow-right</v-icon>
            </v-btn>
          </div>
        </v-row>
      </v-container>
    </section>

    <!-- Aliados Estratégicos -->
    <section class="partners-section">
      <v-container>
        <div class="section-header">
          <h1>{{ $t('index.aliados.titulo') }}</h1>
           <v-divider class="custom-divider"></v-divider>
          <p class="subtitle">
            {{ $t('index.aliados.descripcion') }}
          </p>
        </div>

        <v-row justify="center" class="partners-grid">
          <v-col cols="12" sm="10" md="6" lg="4" v-for="(aliado, i) in aliados" :key="i">
            <v-hover v-slot="{ hover }">
              <v-card :elevation="hover ? 10 : 2" class="partner-card" :class="{ hovered: hover }">
                <v-avatar size="160" class="mx-auto my-4 avatar-border">
                  <v-img :src="aliado.img" contain></v-img>
                </v-avatar>
                <v-card-text>
                  <p class="partner-description">
                    {{ getPartnerText(i) }}
                  </p>
                </v-card-text>
              </v-card>
            </v-hover>
          </v-col>
        </v-row>
      </v-container>
    </section>

    <!-- Iniciativas-->
    <section class="initiatives-section">
      <v-container>
        <div class="section-header">
          <h1>{{ $t('index.iniciativas.titulo') }}</h1>
          <v-divider class="custom-divider"></v-divider>
        </div>

        <v-row>
          <v-col cols="12" sm="6" md="4" v-for="(iniciativa, i) in iniciativasData" :key="i">
            <v-card class="modern-card" :to="iniciativa.link">
              <v-img :src="iniciativa.img" height="200px" class="card-img" />
              <v-card-text>
                <h3>{{ getInitiativeTitle(i) }}</h3>
              </v-card-text>
              <v-card-actions>
                <v-btn outlined rounded>
                  {{ $t('index.iniciativas.verMas') }}
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </section>

    <!--  Preguntas-->
    <section class="faq-section">
      <v-container>
        <div class="text-center mb-8">
          <h1>
            {{ $t('cPreguntas.titulo') }}
            <br>
            <span style="color: #035928;">{{ $t('cPreguntas.titulo2') }}</span>
          </h1>
          <v-divider color="#A65224" class="divider my-4"></v-divider>
          <p class="section-subtitle">
            {{ $t('cPreguntas.descripcion') }}
          </p>
        </div>

        <v-row>
          <!-- Panel izquierdo -->
          <v-col cols="12" md="6">
            <v-expansion-panels accordion flat>
              <v-expansion-panel
                v-for="(item, index) in $t('cPreguntas.faqsLeft')"
                :key="'left-' + index"
                class="faq-card"
              >
                <v-expansion-panel-header class="question">
                  <span>{{ item.pregunta }}</span>
                </v-expansion-panel-header>
                <v-expansion-panel-content class="answer">
                  <p>{{ item.respuesta }}</p>
                  <v-btn text small class="more-btn">
                    {{ $t('cPreguntas.masInformacion') }}
                  </v-btn>
                </v-expansion-panel-content>
              </v-expansion-panel>
            </v-expansion-panels>
          </v-col>

          <!-- Panel derecho -->
          <v-col cols="12" md="6">
            <v-expansion-panels accordion flat>
              <v-expansion-panel
                v-for="(item, index) in $t('cPreguntas.faqsRight')"
                :key="'right-' + index"
                class="faq-card"
              >
                <v-expansion-panel-header class="question">
                  <span>{{ item.pregunta }}</span>
                </v-expansion-panel-header>
                <v-expansion-panel-content class="answer">
                  <p>{{ item.respuesta }}</p>
                  <v-btn text small class="more-btn">
                    {{ $t('cPreguntas.masInformacion') }}
                  </v-btn>
                </v-expansion-panel-content>
              </v-expansion-panel>
            </v-expansion-panels>
          </v-col>
        </v-row>
      </v-container>
    </section>
  </v-app>
</template>

<script>
import CarouselComponent from "~/components/CarouselComponent.vue";

export default {
  components: { CarouselComponent },

  data() {
    return {
      // Solo mantenemos las imágenes y links, el texto viene de i18n
      aliados: [
        { img: "/img/conanp.png" },
        { img: "/img/BLACKS.jpg" },
        { img: "/img/Logotipo_principal_Atzitzintla.jpg.png" },
        { img: "/img/uttecam.png" },
        { img: "/img/logo-white.png" },
      ],

      iniciativasData: [
        { img: "/img/crecer.jpg", link: "/iniciativas" },
        { img: "/img/equipo.png", link: "/iniciativas" },
        { img: "/img/jornada.jpg", link: "/iniciativas" },
      ],
    };
  },

  methods: {
    syncLanguage() {
      if (process.client) {
        const saved = localStorage.getItem('cima-locale') || 'es'
        const current = this.$i18n.locale

        if (current !== saved) {
          console.log(`🔄 Index: Sincronizando de ${current} a ${saved}`)
          this.$i18n.setLocale(saved)

          // Forzar re-renderizado
          this.$forceUpdate()
        }
      }
    },

    getPartnerText(index) {
      try {
        const aliados = this.$t('index.aliados.lista')
        return aliados[index] || 'Aliado estratégico'
      } catch (error) {
        console.error('Error obteniendo texto de aliado:', error)
        return 'Aliado estratégico'
      }
    },

    getInitiativeTitle(index) {
      try {
        const iniciativas = this.$t('index.iniciativas.lista')
        return iniciativas[index]?.titulo || 'Iniciativa'
      } catch (error) {
        console.error('Error obteniendo título de iniciativa:', error)
        return 'Iniciativa'
      }
    },
    handleLanguageChange() {
      // Forzar actualización cuando cambie el idioma
      this.$nextTick(() => {
        this.$forceUpdate()
      })
    }
  },

  mounted() {
    // Sincronizar idioma al montar
    this.syncLanguage()

    // Escuchar cambios de idioma
    this.$nuxt.$on('languageChanged', this.handleLanguageChange)

    console.log('🌐 Index montado:', {
      locale: this.$i18n.locale,
      localStorage: localStorage.getItem('cima-locale'),
      route: this.$route.path
    })
  },

  beforeDestroy() {
    this.$nuxt.$off('languageChanged', this.handleLanguageChange)
  },

  // Meta tags dinámicos para SEO
  head() {
    return {
      title: this.$t('index.quienesSomos.titulo'),
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.$t('index.quienesSomos.descripcion')
        }
      ]
    }
  }
};
</script>

<!-- Todos tus estilos actuales... -->
<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap");

$primary: #035928;
$secondary: #1ca63f;
$accent: #a65224;
$light-bg: #ffffff;
$text-dark: #2a2a2a;
$text-muted: #555555;

* {
  font-family: "Poppins", sans-serif;
}

section {
  padding: 1rem 0;

  @media (max-width: 960px) {
    padding: 3rem 0;
  }

  @media (max-width: 600px) {
    padding: 2rem 0;
  }
}

.btn-primary,
.cta-btn {
  background-color: $primary !important;
  color: white !important;
  font-weight: 600;
  padding: 0.8rem 2rem;
  box-shadow: 0 4px 12px rgba($accent, 0.3);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
  }
}

.actions {
  margin-top: 2rem;
  display: flex;
  justify-content: flex-start;

  @media (max-width: 600px) {
    justify-content: flex-end;
    margin-top: 1.5rem;
  }
}

.v-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
}

.hero-section {
  .hero-text {
    h1 {
      font-size: 4rem;
      font-weight: 800;
      line-height: 1.2;
      color: $primary;

      @media (max-width: 960px) {
        font-size: 2.5rem;
      }

      @media (max-width: 600px) {
        font-size: 2rem;
      }
    }

    .description {
      font-size: 1.5rem;
      color: $text-muted;
      margin: 1.5rem 0;
      text-align: justify;
    }
  }

  .hero-image-wrapper {
    display: flex;
    justify-content: center;

    .image-container {
      position: relative;
      width: 70%;
      max-width: 400px;

      .image-bg {
        position: absolute;
        width: 100%;
        height: 100%;
        background: rgba($secondary, 0.1);
        border-radius: 1rem;
        filter: blur(12px);
      }

      .main-image {
        position: relative;
        border-radius: 1rem;
        box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
        transition: transform 0.3s ease;
        z-index: 2;
      }

      .image-border {
        position: absolute;
        top: 1rem;
        left: 1rem;
        width: calc(100% - 2rem);
        height: calc(100% - 2rem);
        border: 3px solid $accent;
        border-radius: 0.8rem;
        transform: rotate(4deg);
        z-index: 1;
        transition: all 0.3s ease;
      }

      &.hovered {
        .main-image {
          transform: scale(1.05);
        }

        .image-border {
          transform: rotate(-2deg);
          border-color: $secondary;
        }
      }
    }
  }
}

.partners-section {
  padding: 1rem;
  background: $light-bg;

  .partner-card {
    border-radius: 1rem;
    transition: all 0.3s ease;
    width: 100%;
    padding: 1.5rem;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;

    &:hover {
      transform: translateY(-0.5rem);
      box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
      background: white;
    }

    .avatar-border {
      border: 4px solid $primary;
      box-shadow: 0 6px 12px rgba($primary, 0.3);
      margin: auto;
      background-color: rgb(168, 168, 168);
    }

    .v-img {
      object-fit: contain;
      padding: 0.5;
    }
    .partner-description {
      color: $text-muted;
      margin-top: 1rem;
      font-size: 1.2rem;
    }
  }
}

.initiatives-section {
  .modern-card {
    border-radius: 1rem;
    overflow: hidden;
    height: 100%;
    transition: all 0.3s ease;

    &:hover {
      transform: translateY(-0.5rem);
      box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
    }

    .card-img {
      transition: transform 0.3s ease;
    }

    &:hover .card-img {
      transform: scale(1.05);
    }

    h3 {
      font-size: 1.2rem;
      font-weight: 600;
      color: $primary;
      margin: 1rem 0;
      text-align: justify;
    }

    .v-btn {
      background: $primary;
      color: white;
      display: block;
      margin-left: auto;
      margin-right: 12px;
      position: relative;
      top: -20px;

      &:hover {
        background: $primary;
      }
    }
  }
}

.faq-section {
  background: white;
  border-radius: 1rem;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);

  h1 {
    font-size: 4rem;
    font-weight: 800;
    color: $primary;

    span {
      color: $accent;
    }

    @media (max-width: 960px) {
      font-size: 2rem;
    }
  }

  .section-subtitle {
    color: $text-muted;
    max-width: 600px;
    margin: 0 auto 2rem;
    font-size: 1.5rem;
  }

  .faq-card {
    border: 1px solid #eee;
    border-radius: 0.8rem;
    margin-bottom: 1rem;
    transition: all 0.3s ease;

    &:hover {
      border-color: $accent;
    }

    .question {
      font-size: 1.2rem;
      font-weight: 600;
      color: $primary;

      &:hover {
        color: $accent;
      }
    }

    .answer {
      color: $text-muted;
    }

    .more-btn {
      color: $secondary;

      &:hover {
        text-decoration: underline;
      }
    }
  }
}

.section-header {
  padding: 1rem;
  text-align: center;
  margin-bottom: 3rem;

  h1 {
    font-size: 4rem;
    font-weight: 800;
    color: $primary;
    line-height: 1.1;
    margin-bottom: 1rem;

    @media (max-width: 960px) {
      font-size: 2rem;
    }
  }

  .custom-divider {
    height: 100px;
    background-color: $accent !important;
    width: 800px;
    margin: 1rem auto;
  }

  .subtitle {
    font-size: 1.5rem;
    color: $text-muted;
    max-width: 700px;
    margin: 0 auto;
  }
}
</style>
