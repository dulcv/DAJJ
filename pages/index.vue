<template>
  <v-app>
    <CarouselComponent />

    <!-- Sobre CIMA -->
    <section class="custom-section">
      <v-container>
        <v-row align="center" justify="center" class="flex-column-reverse flex-md-row">
          <v-col cols="12" md="6" class="pr-md-6">
            <div class="tag">QUIÉNES SOMOS</div>
            <h1>Sobre <span>CIMA</span></h1>
            <p>
              CIMA es una organización comprometida con el desarrollo sostenible y la innovación social.
              Trabajamos para crear soluciones efectivas a los desafíos más urgentes de nuestra sociedad...
            </p>
            <v-btn color="#6F9CA6" large rounded elevation="0" class="mr-4 mb-2" to ="/nosotros">
              Más Información
              <v-icon right>mdi-plus</v-icon>
            </v-btn>
          </v-col>

          <v-col cols="12" md="6" class="text-center pl-md-6 mb-6 mb-md-0">
            <v-hover v-slot="{ hover }">
              <div class="img-wrapper" :class="{ 'hovered': hover }">
                <v-img src="/cima-logo.jpg" max-height="300" contain class="img-content"></v-img>
                <div class="img-border"></div>
              </div>
            </v-hover>
          </v-col>
        </v-row>
      </v-container>
    </section>

    <!-- Aliados estratégicos -->
    <section class="custom-section light-bg">
      <v-container>
        <div class="section-header">
          <h2>Nuestros <span>Aliados</span></h2>
          <v-divider color="accent" :thickness="2" class="divider" width="80px"></v-divider>
          <p>Colaboramos con organizaciones líderes para maximizar nuestro impacto social y ambiental</p>
        </div>

        <v-row class="justify-center">
          <v-col cols="12" sm="6" md="4" lg="3" v-for="(aliado, i) in aliados" :key="i">
            <v-hover v-slot="{ hover }">
              <v-card :elevation="hover ? 12 : 4" :class="{ 'hover-card': hover }">
                <div :style="{ backgroundColor: hover ? 'light' : 'white' }" class="card-img-container">
                  <v-img :src="aliado.img" contain height="200px" :class="{ 'img-zoom': hover }"></v-img>
                </div>
                <v-card-text class="text-center pa-4">
                  <p :class="{ 'text-primary': hover }">{{ aliado.texto }}</p>
                  <v-expand-transition>
                    <div v-if="hover" class="mt-3">
                      <v-btn small outlined color="accent" class="action-btn">
                        Ver colaboración
                        <v-icon right small>mdi-arrow-right</v-icon>
                      </v-btn>
                    </div>
                  </v-expand-transition>
                </v-card-text>
              </v-card>
            </v-hover>
          </v-col>
        </v-row>

        <div class="text-center mt-8">
          <v-btn color="secondary" dark large rounded class="px-6 cta-btn" elevation="0">
            ¿Quieres ser nuestro aliado?
            <v-icon right>mdi-handshake-outline</v-icon>
          </v-btn>
        </div>
      </v-container>
    </section>

    <!-- Últimas Iniciativas -->
    <section class="custom-section">
      <v-container>
        <div class="section-header">
          <h2>Últimas Iniciativas</h2>
        </div>
        <v-row dense>
          <v-col cols="12" md="4" v-for="(iniciativa, i) in iniciativas" :key="i">
            <v-card class="initiative-card">
              <v-img :src="iniciativa.img" height="200px" cover gradient="to top, rgba(0,0,0,0.6), rgba(0,0,0,0)">
                <v-card-title class="white--text">{{ iniciativa.titulo }}</v-card-title>
              </v-img>
              <v-card-actions class="justify-end">
                <v-btn color="secondary" class="white--text" text :to="iniciativa.link">
                  Ver más
                  <v-icon right>mdi-plus</v-icon>
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </section>
    <Preguntas/>
  </v-app>
</template>

<script>
import CarouselComponent from "~/components/CarouselComponent.vue";
import Preguntas from "~/components/preguntas.vue";

export default {
  components: { CarouselComponent,Preguntas },
  data() {
    return {
      aliados: [
        {
          img: "/img/campañadental.jpg",
          texto: "Colaboramos con organizaciones líderes en tecnología para impactar positivamente a la comunidad."
        },
        {
          img: "/img/campañaref.jpg",
          texto: "Nuestros aliados académicos fundamentan nuestras iniciativas en investigación científica."
        },
        {
          img: "/img/equipocima.jpg",
          texto: "Las alianzas con el sector público permiten escalar soluciones sostenibles."
        },
        {
          img: "/img/",
          texto: "Las alianzas con el sector público permiten escalar soluciones sostenibles."
        }
      ],
      iniciativas: [
        {
          img: "/img/educacion-digital.png",
          titulo: "Educación Digital",
          link: "/iniciativas"
        },
        {
          img: "/img/sostentabilidad-ambiental.png",
          titulo: "Sostenibilidad Ambiental",
          link: "/iniciativas"
        },
        {
          img: "/img/inovacion social.png",
          titulo: "Innovación Social",
          link: "/iniciativas"
        }
      ]
    };
  }
};
</script>

<style scoped>
/* Variables y estilos base */
:root {
  --primary: #035928;
  --secondary: #1CA63F;
  --accent: #A65224;
  --light: #F2E0BD;
  --neutral: #6F9CA6;
}

.custom-section {
  padding: 80px 0;
  position: relative;
}

.light-bg {
  background-color: #f9f9f9;
}

/* Estilos compartidos */
.section-header {
  text-align: center;
  margin-bottom: 48px;
}

.section-header h2 {
  font-size: 2.25rem;
  font-weight: 700;
  margin-bottom: 16px;
}

.section-header h2 span {
  color: var(--secondary);
}

.section-header p {
  max-width: 600px;
  margin: 16px auto 0;
  color: #555;
}

.divider {
  border-radius: 2px;
  margin: 0 auto;
}

.tag {
  display: inline-block;
  background-color: var(--secondary);
  color: white;
  padding: 4px 12px;
  border-radius: 20px;
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 1px;
  text-transform: uppercase;
  margin-bottom: 8px;
}

/* Sobre CIMA */
.img-wrapper {
  position: relative;
  padding: 20px;
  transition: all 0.4s ease;
}

.img-content {
  position: relative;
  z-index: 2;
  transition: transform 0.4s ease;
}

.img-border {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: 3px solid var(--accent);
  border-radius: 16px;
  transform: rotate(3deg);
  z-index: 1;
  transition: all 0.4s ease;
}

.hovered .img-content {
  transform: scale(1.05);
}

.hovered .img-border {
  transform: rotate(-2deg);
  border-color: var(--secondary);
}

/* Aliados */
.hover-card {
  transform: translateY(-8px);
  border: 1px solid var(--accent) !important;
  border-radius: 12px !important;
}

.card-img-container {
  padding: 30px 20px 20px;
  transition: background-color ease;
}

.img-zoom {
  filter: grayscale(0%) !important;
  opacity: 1 !important;
  transform: scale(1.05);
}


/* Iniciativas */
.initiative-card {
  transition: all 0.3s;
  border-radius: 8px !important;
}

.initiative-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(0,0,0,0.1) !important;
}

/* Responsive */
@media (max-width: 960px) {
  .custom-section {
    padding: 60px 0;
  }

  .section-header h2 {
    font-size: 1.75rem;
  }
}

@media (max-width: 600px) {
  .section-header h2 {
    font-size: 1.5rem;
  }

  .custom-section {
    padding: 40px 0;
  }
}
</style>
