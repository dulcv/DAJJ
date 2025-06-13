<template>
  <section class="initiatives-section">
    <v-container>
      <div class="section-header">
        <h1>Últimas Iniciativas</h1>
        <v-divider class="divider"></v-divider>
      </div>

      <v-row dense>
        <v-col
          cols="12"
          sm="6"
          md="4"
          v-for="(iniciativa, i) in iniciativas"
          :key="i"
        >
          <v-card class="modern-card" :to="iniciativa.link" hover flat>
            <v-img :src="iniciativa.img" height="200px" class="card-img" />
            <v-card-text class="text-content">
              <h3>{{ iniciativa.titulo }}</h3>
            </v-card-text>
            <v-card-actions class="justify-center">
              <v-btn color="#035928" outlined rounded>
                Ver más
                <v-icon right>mdi-plus</v-icon>
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script>
export default {
  name: "InitiativesSection",
  data() {
    return {
      iniciativas: [
        {
          img: "/img/crecer.jpg",
          titulo: "Educación Digital",
          link: "/iniciativas"
        },
        {
          img: "/img/equipo.png",
          titulo: "Sostenibilidad",
          link: "/iniciativas"
        },
        {
          img: "/img/jornada.jpg",
          titulo: "Innovación Social",
          link: "/iniciativas"
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
$primary: #035928;
$secondary: #1CA63F;
$accent: #A65224;
$light-bg: #ffffff;
$text-dark: #2a2a2a;
$text-muted: #555555;

.initiatives-section {
  padding: 50px 0;
  background-color: white;

  .section-header {
    text-align: center;
    margin-bottom: 48px;

    h1 {
      font-size: 3rem;
      font-weight: 800;
      color: $primary;
      margin-bottom: 12px;
      font-family: 'Poppins', sans-serif;
    }

    .divider {
      width: 50rem;
      height: 10rem;
      background-color: $accent;
      margin: auto;
    }
  }

  .modern-card {
    border-radius: 16px;
    overflow: hidden;
    transition: all 0.3s ease;
    background: #fff;
    box-shadow: 0 4px 18px rgba(0, 0, 0, 0.06);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;

    &:hover {
      transform: translateY(-4px);
      box-shadow: 0 10px 24px rgba(0, 0, 0, 0.12);
    }

    .card-img {
      object-fit: cover;
    }

    .text-content {
      padding: 20px;

      h3 {
        margin: 0;
        font-size: 1.25rem;
        font-weight: 700;
        color: #333;
         font-family: 'Poppins', sans-serif;
      }
    }

    .v-btn {
      font-weight: 600;
      color: $primary;
      border-color: $primary;
      transition: background-color 0.3s ease;

      &:hover {
        background-color: #ffffff;
      }
    }
  }
}
</style>

