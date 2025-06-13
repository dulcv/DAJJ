<template>
  <v-app>
    <CarouselComponent />
    <section class="hero-section">
      <v-container>
        <v-row align="center" justify="center" class="hero-row">
          <v-col cols="12" md="6" class="hero-text">
            <h1>Somos CIMA</h1>
            <p class="description">
              En CIMA fusionamos creatividad y compromiso para construir
              soluciones sostenibles a los desafíos más urgentes de nuestra
              sociedad.
            </p>
            <div class="actions">
              <v-btn color="accent" large rounded class="btn-primary" to="/nosotros">
                Conoce más <v-icon right>mdi-arrow-right</v-icon>
              </v-btn>
            </div>
          </v-col>
          <v-col cols="12" md="6" class="hero-image-wrapper">
            <v-hover v-slot="{ hover }">
              <div class="image-container" :class="{ hovered: hover }">
                <div class="image-bg"></div>
                <v-img
                  src="/cima-logo.jpg"
                  contain
                  class="main-image"
                  alt="Logo CIMA"
                />
                <div class="image-border"></div>
              </div>
            </v-hover>
          </v-col>
        </v-row>
      </v-container>
    </section>
    <Aliados />
    <Iniciativa />
    <Preguntas />
  </v-app>
</template>

<script>
import CarouselComponent from "~/components/CarouselComponent.vue";
import Iniciativa from "~/components/iniciativa.vue";
import Aliados from "~/components/aliados.vue";
import Preguntas from "~/components/preguntas.vue";

export default {
  components: {
    CarouselComponent,
    Iniciativa,
    Aliados,
    Preguntas,
  },
};
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap');

$primary: #035928;
$secondary: #1CA63F;
$accent: #A65224;
$light-bg: #ffffff;
$text-dark: #2a2a2a;
$text-muted: #555555;

.hero-section {
  width: 100%;
  padding: 40px 0;
  background-color: $light-bg;
  font-family: 'Poppins', sans-serif;

  .hero-row {
    align-items: center;
  }

  .hero-text {
    padding-right: 3rem;

    h1 {
      font-size: 3rem;
      font-weight: 800;
      color: $primary;
      line-height: 1.1;
      margin-bottom: 1rem;
      font-family: 'Poppins', sans-serif;
    }

    .description {
    font-size: 1.15rem;
      color: $text-muted;
      max-width: 600px;
      margin: 0 auto;
      font-family: 'Poppins', sans-serif;

    }

    .actions {
      .btn-primary {
        background-color: $accent !important;
        color: white !important;
        font-weight: 600;
        font-size: 1.1rem;
        padding: 14px 32px !important;
        border-radius: 28px !important;
        box-shadow: 0 6px 16px rgba($accent, 0.4);
         font-family: 'Poppins', sans-serif;

        &:hover {
          background-color: $secondary !important;
          box-shadow: 0 8px 20px rgba($secondary, 0.5);
          transform: translateY(-3px);
          transition: all 0.3s ease;
        }

        v-icon {
          margin-left: 8px;
        }
      }
    }
  }

  .hero-image-wrapper {
    display: flex;
    justify-content: center;
    padding-left: 2rem;

    .image-container {
      position: relative;
      width: 400px;
      max-width: 90%;

      .image-bg {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba($secondary, 0.1);
        border-radius: 24px;
        filter: blur(12px);
        z-index: 0;
        transition: background 0.3s ease;
      }

      .main-image {
        position: relative;
        border-radius: 24px;
        box-shadow: 0 12px 24px rgba(0, 0, 0, 0.12);
        transition: transform 0.35s ease, box-shadow 0.35s ease;
        z-index: 2;
      }

      .image-border {
        position: absolute;
        top: 16px;
        left: 16px;
        width: calc(100% - 32px);
        height: calc(100% - 32px);
        border: 4px solid $accent;
        border-radius: 20px;
        transform: rotate(4deg);
        z-index: 1;
        transition: all 0.35s ease;
      }

      &.hovered {
        .main-image {
          transform: scale(1.07) rotate(1.5deg);
          box-shadow: 0 16px 32px rgba(0, 0, 0, 0.18);
        }

        .image-border {
          transform: rotate(-2deg);
          border-color: $secondary;
        }

        .image-bg {
          background: rgba($secondary, 0.2);
          filter: blur(16px);
        }
      }
    }
  }
}

@media (max-width: 960px) {
  .hero-section {
    padding: 64px 20px;

    .hero-text {
      padding-right: 0;

      h1 {
        font-size: 2.5rem;
        font-weight: 800;
      }

      .description {
        max-width: 100%;
      }
    }

    .hero-image-wrapper {
      padding-left: 0;
      margin-top: 40px;
    }
  }
}

@media (max-width: 600px) {
  .hero-section {
    padding: 48px 16px;

    .hero-text {
      h1 {
        font-size: 2rem;
      }

      .description {
        font-size: 1.1rem;
      }
    }
  }
}
</style>
