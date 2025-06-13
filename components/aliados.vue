<template>
  <section class="partners-section">
    <v-container>
      <div class="section-header">
        <h1>Nuestros Aliados</h1>
        <v-divider class="divider my-4" :thickness="6" style="width: 100px; margin: 0 auto"></v-divider>
        <p class="subtitle">Colaboramos con organizaciones líderes para maximizar nuestro impacto</p>
      </div>

      <v-row justify="center" class="partners-grid">
        <v-col
          cols="12"
          sm="6"
          md="4"
          lg="3"
          v-for="(aliado, i) in aliados"
          :key="i"
          class="d-flex justify-center"
        >
          <v-hover v-slot="{ hover }">
            <v-card
              :elevation="hover ? 10 : 2"
              class="partner-card text-center"
              :class="{ hovered: hover }"
            >
              <v-avatar size="120" class="mx-auto my-4 avatar-border">
                <v-img :src="aliado.img" cover></v-img>
              </v-avatar>

              <v-card-text class="text-body">
                <p class="partner-description">{{ aliado.texto }}</p>
              </v-card-text>
            </v-card>
          </v-hover>
        </v-col>
      </v-row>

      <div class="text-center mt-12">
        <v-btn  dark x-large rounded class="cta-btn">
          ¿Quieres ser nuestro aliado? <v-icon right>mdi-handshake</v-icon>
        </v-btn>
      </div>
    </v-container>
  </section>
</template>

<script>
export default {
  name: "PartnersSection",
  data() {
    return {
      aliados: [
        { img: "/img/campañadental.jpg", texto: "Colaboración con líderes tecnológicos" },
        { img: "/img/campañaref.jpg", texto: "Aliados académicos para investigación" },
        { img: "/img/equipocima.jpg", texto: "Alianzas con el sector público" }
      ]
    };
  }
};
</script>

<style scoped lang="scss" >
$primary: #035928;
$secondary: #1CA63F;
$accent: #A65224;
$light-bg: #ffffff;
$text-dark: #2a2a2a;
$text-muted: #555555;

.partners-section {
  padding: 100px 0;
  background-color:$light-bg;

  .section-header {
    text-align: center;
    margin-bottom: 56px;

    h1 {
      font-size: 3rem;
      font-weight: 800;
      color: $primary;
      margin-bottom: 1rem;
      font-family: 'Poppins', sans-serif;
    }

    .subtitle {
      font-size: 1.15rem;
      color: $text-muted;
      max-width: 600px;
      margin: 0 auto;
      font-family: 'Poppins', sans-serif;
    }

    .divider {
      width: 100px;
      height: 30px;
      background-color: $accent;
      margin: 0 auto;
    }
  }

  .partner-card {
    width: 100%;
    border-radius: 20px;
    padding: 20px;
    transition: 0.4s ease;
    background: $light-bg;

    &.hovered {
      transform: translateY(-6px);
      box-shadow: 0 12px 30px rgba(0, 0, 0, 0.1);
      background: white;
    }

    .partner-description {
      font-size: 1rem;
      font-weight: 500;
      color: $text-muted;
      margin-top: 12px;
      font-family: 'Poppins', sans-serif;

    }

    .animated-btn {
      font-weight: 600;
      text-transform: none;
      transition: 0.3s;
    }
  }

  .avatar-border {
    border: 4px solid $primary;
    box-shadow: 0 4px 12px rgba(3, 89, 40, 0.2);
  }

  .cta-btn {
    background-color: #A65224;
    font-weight: 700;
    padding: 16px 36px;
    font-size: 1.2rem;
    transition: 0.3s ease;
    font-family: 'Poppins', sans-serif;

    &:hover {
      background-color: darken($secondary, 8%);
    }
  }
}
</style>
