<template>
  <section class="initiatives-section">
    <v-container >
      <!-- Encabezado -->
      <div class="section-header">
        <h1>Últimas Iniciativas</h1>
        <v-divider class="custom-divider my-4"></v-divider>
      </div>

      <v-row>
        <v-col
          v-for="(item, index) in iniciativas"
          :key="index"
          cols="12"
          sm="6"
          md="4"
        >
          <v-card class="hover-card" >
            <!-- Imagen arriba con título -->
            <v-img
              :src="item.img"
              height="200"
              class="card-img"
            >
              <v-card-title class="headline">{{ item.titulo }}</v-card-title>
            </v-img>

            <!-- Descripción corta siempre visible -->
            <v-card-text>
            <h3>  {{ item.descripcionCorta }} </h3>
            </v-card-text>
            <!-- Descripción larga expandible -->
            <v-expand-transition>
              <div v-if="item.expandido">
                <v-card-text class="text--secondary">
                  {{ item.descripcionLarga }}
                </v-card-text>
              </div>
            </v-expand-transition>

            <!-- Botón de ver más (expandir) -->
            <v-card-actions class="justify-end">
              <v-btn outlined rounded  @click="item.expandido = !item.expandido">
                <v-icon color="white">
                  {{ item.expandido ? 'mdi-chevron-up' : 'mdi-chevron-down' }}
                </v-icon>
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
  data() {
    return {
      iniciativas: [
        {
          title: "Reforestación",
          img: "https://th.bing.com/th/id/R.7025f7ee6c3d829d53da099f6f492544?rik=ic5g73Q9O4r3Mg&pid=ImgRaw&r=0",
          descripcionCorta: "Lorem ipsum.",
          descripcionLarga:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas aut cumque ea enim vitae similique. Nulla eius numquam ex laborum facilis dolores qui, incidunt fuga dolorum totam. Quae, eius quo!",
          expandido: false,
        },
        {
          title: "Orientación Vocacional",
          img: "https://tse4.mm.bing.net/th/id/OIP.uAitzOvsdkLOa7dGAFvrVgHaEK?rs=1&pid=ImgDetMain",
          descripcionCorta: "Lorem ipsum.",
          descripcionLarga:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas aut cumque ea enim vitae similique. Nulla eius numquam ex laborum facilis dolores qui, incidunt fuga dolorum totam. Quae, eius quo!",
          expandido: false,
        },
        {
          title: "Orientación Vocacional",
          img: "https://tse4.mm.bing.net/th/id/OIP.uAitzOvsdkLOa7dGAFvrVgHaEK?rs=1&pid=ImgDetMain",
          descripcionCorta: "Lorem ipsum.",
          descripcionLarga:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas aut cumque ea enim vitae similique. Nulla eius numquam ex laborum facilis dolores qui, incidunt fuga dolorum totam. Quae, eius quo!",
          expandido: false,
        },
        {
          title: "Reforestación",
          img: "https://th.bing.com/th/id/R.7025f7ee6c3d829d53da099f6f492544?rik=ic5g73Q9O4r3Mg&pid=ImgRaw&r=0",
          descripcionCorta: "Lorem ipsum.",
          descripcionLarga:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas aut cumque ea enim vitae similique. Nulla eius numquam ex laborum facilis dolores qui, incidunt fuga dolorum totam. Quae, eius quo!",
          expandido: false,
        },

        {
          title: "Reforestación",
          img: "https://th.bing.com/th/id/R.7025f7ee6c3d829d53da099f6f492544?rik=ic5g73Q9O4r3Mg&pid=ImgRaw&r=0",
          descripcionCorta: "Lorem ipsum.",
          descripcionLarga:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas aut cumque ea enim vitae similique. Nulla eius numquam ex laborum facilis dolores qui, incidunt fuga dolorum totam. Quae, eius quo!",
          expandido: false,
        },
        {
          title: "Orientación Vocacional",
          img: "https://tse4.mm.bing.net/th/id/OIP.uAitzOvsdkLOa7dGAFvrVgHaEK?rs=1&pid=ImgDetMain",
          descripcionCorta: "Lorem ipsum.",
          descripcionLarga:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas aut cumque ea enim vitae similique. Nulla eius numquam ex laborum facilis dolores qui, incidunt fuga dolorum totam. Quae, eius quo!",
          expandido: false,
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap');

// Variables de colores si no las tienes aún:
$primary: #035928;
$accent: #A65224;

.initiatives-section {
  .hover-card {
   border-radius: 1rem;
    overflow: hidden;
    height: 100%;
    transition: all 0.3s ease;

  &:hover {
     transform: translateY(-0.5rem);
      box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  }

  .v-img {
    transition: transform 0.3s ease;
  }

  &:hover .v-img {
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
      top: -15px;

      &:hover {
        background: $primary;
      }
    }
}
  .custom-divider {
    background-color: $accent !important;
    height: 50px;
    width: 600px;
    margin: 1rem auto;
  }
}
</style>
