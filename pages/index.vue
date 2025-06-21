<template>
  <v-app>
    <!-- Carrusel principal -->
    <CarouselComponent />

<<<<<<< HEAD
    <!-- Sección HERO -->
    <section class="hero-section">
      <v-container>
        <v-row align="center" justify="center">
          <!-- Texto principal -->
          <v-col cols="12" md="6" class="hero-text">
            <h1>Somos CIMA</h1>
            <p class="description">
              En CIMA fusionamos creatividad y compromiso para construir
              soluciones sostenibles a los desafíos más urgentes de nuestra
              sociedad.
            </p>
            <!-- Botón visible solo en escritorio -->
            <div class="actions d-none d-md-flex">
              <v-btn color="#035928" large rounded class="btn-primary" to="/nosotros">
                Conoce más <v-icon right>mdi-arrow-right</v-icon>
              </v-btn>
            </div>
          </v-col>

          <!-- Imagen del hero -->
=======
    <!-- Hero Section -->
    <section class="hero-section">
      <v-container>
        <v-row align="center" justify="center">
          <v-col cols="12" md="6" class="hero-text">
            <h1>{{ $t('index.quienesSomos.titulo') }}</h1>
            <p class="description">
              {{ $t('index.quienesSomos.descripcion') }}
            </p>
            <div class="actions">
              <v-btn color="accent" large rounded class="btn-primary" to="/nosotros">
                {{ $t('index.quienesSomos.boton') }} <v-icon right>mdi-arrow-right</v-icon>
              </v-btn>
            </div>
          </v-col>
>>>>>>> eff13a8b9d7103134c834d6eed0410e8302781a5
          <v-col cols="12" md="6" class="hero-image-wrapper">
            <v-hover v-slot="{ hover }">
              <div class="image-container" :class="{ hovered: hover }">
                <div class="image-bg"></div>
<<<<<<< HEAD
                <v-img src="/cima-logo.jpg" contain class="main-image" alt="Logo CIMA" />
=======
                <v-img
                  src="/cima-logo.jpg"
                  contain
                  class="main-image"
                  alt="Logo CIMA"
                />
>>>>>>> eff13a8b9d7103134c834d6eed0410e8302781a5
                <div class="image-border"></div>
              </div>
            </v-hover>
          </v-col>

          <!-- Botón para móvil -->
          <div class="actions d-flex d-md-none" style="margin-top: 1.5rem; justify-content: flex-end">
            <v-btn color="#035928" large rounded class="btn-primary" to="/nosotros">
              Conoce más <v-icon right>mdi-arrow-right</v-icon>
            </v-btn>
          </div>
        </v-row>
      </v-container>
    </section>

<<<<<<< HEAD
    <!-- Sección de Aliados Estratégicos -->
    <section class="partners-section">
      <v-container>
        <div class="section-header">
          <h1>Nuestros Aliados</h1>
          <v-divider class="custom-divider my-4"></v-divider>
          <p class="subtitle">
            Colaboramos con organizaciones líderes para maximizar nuestro impacto
          </p>
        </div>

        <v-row justify="center" class="partners-grid">
          <v-col cols="12" sm="10" md="6" lg="4" v-for="(aliado, i) in aliados" :key="i">
            <v-hover v-slot="{ hover }">
             <!----> <v-card :elevation="hover ? 10 : 2" class="partner-card" :class="{ hovered: hover }">
                <v-avatar size="160" class="mx-auto my-4 avatar-border">
                  <v-img :src="aliado.img" contain></v-img>
=======
    <!-- Partners Section -->
    <section class="partners-section">
      <v-container>
        <div class="section-header">
          <h1>{{ $t('index.aliados.titulo') }}</h1>
          <v-divider class="custom-divider my-4"></v-divider>
          <p class="subtitle">{{ $t('index.aliados.descripcion') }}</p>
        </div>

        <v-row justify="center" class="partners-grid">
          <v-col
            cols="12"
            sm="6"
            md="4"
            lg="3"
            v-for="(aliado, i) in aliados"
            :key="i"
          >
            <v-hover v-slot="{ hover }">
              <v-card
                :elevation="hover ? 10 : 2"
                class="partner-card"
                :class="{ hovered: hover }"
              >
                <v-avatar size="160" class="mx-auto my-4 avatar-border">
                  <v-img :src="aliado.img" cover></v-img>
>>>>>>> eff13a8b9d7103134c834d6eed0410e8302781a5
                </v-avatar>
                <v-card-text>
                  <p class="partner-description">{{ aliado.texto }}</p>
                </v-card-text>
              </v-card>
            </v-hover>
          </v-col>
        </v-row>
<<<<<<< HEAD
      </v-container>
    </section>

    <!-- Sección de Iniciativas -->
    <section class="initiatives-section">
      <v-container >
        <div class="section-header">
          <h1>Últimas Iniciativas</h1>
=======

        <div class="text-center mt-4">
          <v-btn dark large rounded class="cta-btn">
            {{ $t('index.aliados.boton') }}<v-icon right>mdi-handshake</v-icon>
          </v-btn>
        </div>
      </v-container>
    </section>

    <!-- Initiatives Section -->
    <section class="initiatives-section">
      <v-container>
        <div class="section-header">
          <h1>{{ $t('index.iniciativas.titulo') }}</h1>
>>>>>>> eff13a8b9d7103134c834d6eed0410e8302781a5
          <v-divider class="custom-divider"></v-divider>
        </div>

        <v-row>
<<<<<<< HEAD
          <v-col cols="12" sm="6" md="4" v-for="(iniciativa, i) in iniciativas" :key="i">
=======
          <v-col
            cols="12"
            sm="6"
            md="4"
            v-for="(iniciativa, i) in iniciativas"
            :key="i"
          >
>>>>>>> eff13a8b9d7103134c834d6eed0410e8302781a5
            <v-card class="modern-card" :to="iniciativa.link">
              <v-img :src="iniciativa.img" height="200px" class="card-img" />
              <v-card-text>
                <h3>{{ iniciativa.titulo }}</h3>
              </v-card-text>
              <v-card-actions>
<<<<<<< HEAD
                <v-btn outlined rounded>
                  Ver más
=======
                <v-btn color="#035928" outlined rounded>
                  {{ $t('index.iniciativas.verMas') }} <v-icon right>mdi-plus</v-icon>
>>>>>>> eff13a8b9d7103134c834d6eed0410e8302781a5
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </section>

<<<<<<< HEAD
    <!-- Sección de Preguntas Frecuentes (FAQ) -->
    <section class="faq-section">
      <v-container>
        <div class="text-center mb-8">
          <h1>Preguntas Frecuentes</h1>
          <v-divider color="#A65224" class="divider my-4"></v-divider>
          <p class="section-subtitle">
            Encuentra respuestas rápidas a las preguntas más comunes sobre nuestro trabajo
=======
    <!-- FAQ Section -->
    <section class="faq-section">
      <v-container>
        <div class="text-center mb-8">
          <h1>{{ $t('cPreguntas.titulo') }} <span>{{ $t('cPreguntas.titulo2') }}</span></h1>
          <v-divider color="#A65224" class="divider my-4"></v-divider>
          <p class="section-subtitle">
            {{ $t('cPreguntas.descripcion') }}
>>>>>>> eff13a8b9d7103134c834d6eed0410e8302781a5
          </p>
        </div>

        <v-row>
<<<<<<< HEAD
          <!-- Panel izquierdo -->
=======
>>>>>>> eff13a8b9d7103134c834d6eed0410e8302781a5
          <v-col cols="12" md="6">
            <v-expansion-panels accordion flat>
              <v-expansion-panel
                v-for="(item, index) in faqsLeft"
                :key="'left-' + index"
                class="faq-card"
              >
                <v-expansion-panel-header class="question">
                  <span>{{ item.pregunta }}</span>
                </v-expansion-panel-header>
                <v-expansion-panel-content class="answer">
                  <p>{{ item.respuesta }}</p>
<<<<<<< HEAD
=======
                  <v-btn
                    v-if="item.link"
                    text
                    small
                    :href="item.link"
                    class="more-btn"
                  >
                    {{ $t('cPreguntas.masInformacion') }} <v-icon right small>mdi-arrow-right</v-icon>
                  </v-btn>
>>>>>>> eff13a8b9d7103134c834d6eed0410e8302781a5
                </v-expansion-panel-content>
              </v-expansion-panel>
            </v-expansion-panels>
          </v-col>

<<<<<<< HEAD
          <!-- Panel derecho -->
=======
>>>>>>> eff13a8b9d7103134c834d6eed0410e8302781a5
          <v-col cols="12" md="6">
            <v-expansion-panels accordion flat>
              <v-expansion-panel
                v-for="(item, index) in faqsRight"
                :key="'right-' + index"
                class="faq-card"
              >
                <v-expansion-panel-header class="question">
                  <span>{{ item.pregunta }}</span>
                </v-expansion-panel-header>
                <v-expansion-panel-content class="answer">
                  <p>{{ item.respuesta }}</p>
<<<<<<< HEAD
=======
                  <v-btn
                    v-if="item.link"
                    text
                    small
                    :href="item.link"
                    class="more-btn"
                  >
                    {{ $t('cPreguntas.masInformacion') }} <v-icon right small>mdi-arrow-right</v-icon>
                  </v-btn>
>>>>>>> eff13a8b9d7103134c834d6eed0410e8302781a5
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
<<<<<<< HEAD
=======
import AliadoCard from "~/components/AliadoCard.vue";
import IniciativaCard from "~/components/AliadoCard.vue";
>>>>>>> eff13a8b9d7103134c834d6eed0410e8302781a5

export default {
  components: { CarouselComponent },
  data() {
    return {
<<<<<<< HEAD
      aliados: [
        {
          img: "/img/conanp.png",
          texto: "Colaboración con líderes tecnológicos",
        },
        {
          img: "/img/BLACKS.jpg",
          texto: "Aliados académicos para investigación",
        },
        {
          img: "/img/Logotipo_principal_Atzitzintla.jpg.png",
          texto: "Alianzas con el sector público",
        },
        {
          img: "/img/uttecam.png",
          texto: "Alianzas con el sector público",
        },
        {
          img: "/img/logo-white.png",
          texto: "Alianzas con el sector público",
        },
      ],
      iniciativas: [
        {
          img: "/img/crecer.jpg",
          titulo: "Educación Digital",
          link: "/iniciativas",
        },
        {
          img: "/img/equipo.png",
          titulo: "Sostenibilidad",
          link: "/iniciativas",
        },
        {
          img: "/img/jornada.jpg",
          titulo: "Innovación Social",
          link: "/iniciativas",
        },
      ],
      faqs: [
        {
          pregunta: "¿Qué tipo de proyectos desarrolla CIMA A.C.?",
          respuesta:
            "Desarrollamos proyectos enfocados en la conservación del medio ambiente, educación, salud, desarrollo económico local y fortalecimiento comunitario.",
        },
        {
          pregunta: "¿Quiénes forman parte del equipo de CIMA A.C.?",
          respuesta:
            "Nuestro equipo está compuesto por profesionales multidisciplinarios comprometidos con el desarrollo social.",
        },
        {
          pregunta: "¿Cómo puedo participar como voluntario?",
          respuesta:
            "Puedes contactarnos a través de nuestro formulario de voluntariado o asistir a nuestras jornadas de reclutamiento.",
        },
        {
          pregunta: "¿Reciben donaciones?",
          respuesta:
            "Sí, aceptamos donaciones tanto en especie como monetarias para apoyar nuestros proyectos.",
        },
      ],
    };
=======
      aliados: this.$t('index.aliados.lista'),
      iniciativas: this.$t('index.iniciativas.lista'),
      faqsLeft: this.$t('cPreguntas.faqsLeft'),
      faqsRight: this.$t('cPreguntas.faqsRight'),
    }
>>>>>>> eff13a8b9d7103134c834d6eed0410e8302781a5
  },
  computed: {
    faqsLeft() {
      return this.faqs.slice(0, Math.ceil(this.faqs.length / 2));
    },
    faqsRight() {
      return this.faqs.slice(Math.ceil(this.faqs.length / 2));
<<<<<<< HEAD
    },
  },
=======
    }
  }
>>>>>>> eff13a8b9d7103134c834d6eed0410e8302781a5
};
</script>

<style lang="scss">
<<<<<<< HEAD
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap");

/* ================================
   🎨 VARIABLES GLOBALES
================================ */
$primary: #035928;
$secondary: #1ca63f;
$accent: #a65224;
=======
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap');

// Variables
$primary: #035928;
$secondary: #1CA63F;
$accent: #A65224;
>>>>>>> eff13a8b9d7103134c834d6eed0410e8302781a5
$light-bg: #ffffff;
$text-dark: #2a2a2a;
$text-muted: #555555;

<<<<<<< HEAD
/* ================================
   🔤 TIPOGRAFÍA GLOBAL
================================ */
* {
  font-family: "Poppins", sans-serif;
}

/* ================================
   📐 ESPACIADO GLOBAL DE SECCIONES
================================ */
section {
  padding: 1rem 0;
=======
/* ==================== */
/* ESTILOS GLOBALES/BASE */
/* ==================== */

// Fuente y tipografía
* {
  font-family: 'Poppins', sans-serif;
}

// Estructura base
section {
  padding: 1.5rem 0;
>>>>>>> eff13a8b9d7103134c834d6eed0410e8302781a5

  @media (max-width: 960px) {
    padding: 3rem 0;
  }

  @media (max-width: 600px) {
    padding: 2rem 0;
  }
}

<<<<<<< HEAD
/* ================================
   🔘 BOTONES
================================ */
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

/* Botón para sección Hero */
.actions {
  margin-top: 2rem;
  display: flex;
  justify-content: flex-start;

  @media (max-width: 600px) {
    justify-content: flex-end; // Alineado a la derecha en móvil
    margin-top: 1.5rem;
  }
}

/* ================================
   📦 CONTENEDOR
================================ */
.v-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 rem; // <-- si quieres padding lateral, corrige a "0 1rem" por ejemplo
}

/* ================================
   🟩 SECCIÓN HERO
================================ */
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

/* ================================
   🤝 SECCIÓN ALIADOS
================================ */
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

/* ================================
   🚀 SECCIÓN INICIATIVAS
================================ */
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

/* ================================
   ❓ SECCIÓN PREGUNTAS FRECUENTES
================================ */
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

/* ================================
   ✏️ ENCABEZADOS COMUNES
================================ */
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
=======
.v-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 rem;
}

// Encabezados de sección
.section-header {
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
>>>>>>> eff13a8b9d7103134c834d6eed0410e8302781a5
    color: $text-muted;
    max-width: 700px;
    margin: 0 auto;
  }
}

// Botones
.btn-primary, .cta-btn {
  background-color: $accent !important;
  color: white !important;
  font-weight: 600;
  padding: 0.8rem 2rem;
  box-shadow: 0 4px 12px rgba($accent, 0.3);
  transition: all 0.3s ease;

  &:hover {
    background-color: darken($accent, 10%) !important;
    transform: translateY(-2px);
  }
}

// Tarjetas comunes
.card-base {
  border-radius: 1rem;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-0.5rem);
    box-shadow: 0 10px 20px rgba(0,0,0,0.1);
  }
}

/* ==================== */
/* ESTILOS ESPECÍFICOS POR SECCIÓN */
/* ==================== */

/* sobre cima Section */
.hero-section {
  .hero-text {
    h1 {
      font-size: 4rem;
      font-weight: 800;
      line-height: 1.2;
      color: #035928;

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
        position:absolute;
        width: 100%;
        height: 100%;
        background: rgba($secondary, 0.1);
        border-radius: 1rem;
        filter: blur(12px);
      }

      .main-image {
        position: relative;
        border-radius: 1rem;
        box-shadow: 0 8px 24px rgba(0,0,0,0.1);
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

/* aliados Section */
.partners-section {
  padding: 100px 0;
  background: $light-bg;

  .partner-card {
    @extend .card-base;
    width: 100%;
    padding: 1.5rem;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;

    &:hover {
      background: white;
    }

    .avatar-border {
      border: 4px solid $primary;
      box-shadow: 0 6px 12px rgba($primary, 0.3);
      margin: auto;
    }

    .partner-description {
      color: $text-muted;
      margin-top: 1rem;
      font-family: 'Poppins', sans-serif;
      font-size: 1.2rem;
    }
  }
}

/* Initiatives Section */
.initiatives-section {
  .modern-card {
    @extend .card-base;
    overflow: hidden;
    height: 100%;

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
      font-family: 'Poppins', sans-serif;
      text-align: justify;
    }

    .v-btn {
      border-color: $primary;
      color: $primary;

      &:hover {
        background: rgba($primary, 0.1);
      }
    }
  }
}

/* FAQ Section */
.faq-section {
  background: white;
  border-radius: 1rem;
  box-shadow: 0 4px 20px rgba(0,0,0,0.05);

  h1 {
    font-size: 4rem;
    font-weight: 800;
    color: $primary;
    font-family: 'Poppins',sans-serif;

    span {
      color: $accent;
      font-family: 'Poppins',sans-serif;
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
    font-family: 'Poppins',sans-serif;
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
      font-family: 'Poppins',sans-serif;

      &:hover {
        color: $accent;
      }
    }

    .answer {
      color: $text-muted;
      border-left: 3px solid $accent;
      font-family: 'Poppins',sans-serif;
      font-size: 1.2rem;
    }

    .more-btn {
      color: $secondary;

      &:hover {
        text-decoration: underline;
      }
    }
  }
}
</style>