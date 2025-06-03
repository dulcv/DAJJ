<template>
<v-app>
    <!-- Carrusel -->
    <ImageCarousel />

    <!-- Sobre CIMA -->
    <v-container class="my-12">
      <h1 class="text-h3 font-weight-bold mb-4 text-primary">Sobre CIMA</h1>
      <p class="text-body-1">
        CIMA es una organización comprometida con el desarrollo sostenible y la innovación social.
        Trabajamos para crear soluciones efectivas a los desafíos más urgentes de nuestra sociedad.
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium...
      </p>
    </v-container>

    <!-- Aliados Estratégicos -->
    <v-container class="my-12">
      <h2 class="text-h4 font-weight-bold mb-6 text-primary">Aliados Estratégicos</h2>
      <v-row>
        <v-col cols="12" md="4" v-for="(aliado, i) in aliados" :key="i">
          <v-card class="pa-4" outlined>
            <v-img :src="aliado.img" contain height="120" class="mb-4"></v-img>
            <p class="text-body-1">{{ aliado.texto }}</p>
          </v-card>
        </v-col>
      </v-row>
    </v-container>

    <!-- Últimas Iniciativas -->
    <v-container class="my-12">
      <h2 class="text-h4 font-weight-bold mb-6 text-primary">Últimas Iniciativas</h2>
      <v-row>
        <v-col cols="12" md="4" v-for="(iniciativa, i) in iniciativas" :key="i">
          <v-card class="d-flex flex-column" outlined>
            <v-img :src="iniciativa.img" height="200px" cover></v-img>
            <v-card-title class="font-weight-bold">{{ iniciativa.titulo }}</v-card-title>
            <v-card-actions>
              <v-btn color="primary" text :to="iniciativa.link">Ver más</v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>

    <!-- Equipo -->
    <v-container class="my-12">
      <h2 class="text-h4 font-weight-bold mb-6 text-primary">Equipo</h2>
      <p class="text-body-1 mb-6">
        Nuestro equipo está compuesto por profesionales multidisciplinarios comprometidos con la misión de CIMA.
        Contamos con expertos en desarrollo social, tecnología, educación y políticas públicas.
      </p>
      <v-row>
        <v-col cols="8" sm="4" v-for="n in 6" :key="n">
          <v-img :src="`/img/equipo${n}.jpg`" aspect-ratio="1" class="rounded-lg elevation-2"></v-img>
        </v-col>
      </v-row>
    </v-container>
    <Footer/>
  </v-app>

</template>

<script>
import ImageCarousel from '~/components/ImageCarousel.vue'
import Footer from '~/components/Footer.vue'
export default {
  components: {
    ImageCarousel,
    Footer
  },
  data() {
    return {
      aliados: [
        {
          img: '/img/aliado1.png',
          texto: 'Colaboramos con organizaciones líderes en tecnología para impactar positivamente a la comunidad.'
        },
        {
          img: '/img/aliado2.png',
          texto: 'Nuestros aliados académicos fundamentan nuestras iniciativas en investigación científica.'
        },
        {
          img: '/img/aliado3.png',
          texto: 'Las alianzas con el sector público permiten escalar soluciones sostenibles.'
        }
      ],
      iniciativas: [
        {
          img: '/img/iniciativa1.jpg',
          titulo: 'Educación Digital',
          link: '/iniciativa1'
        },
        {
          img: '/img/iniciativa2.jpg',
          titulo: 'Sostenibilidad Ambiental',
          link: '/iniciativa2'
        },
        {
          img: '/img/iniciativa3.jpg',
          titulo: 'Innovación Social',
          link: '/iniciativa3'
        }
      ]
    }
  }
}
</script>

<style scoped>
h1, h2 {
  font-family: 'Poppins', sans-serif;
}
.text-primary {
  color: #2e7d32;
}
</style>

