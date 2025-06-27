<template>
  <section class="initiatives-section">
    <v-container>
      <!-- Encabezado -->
      <div class="section-header">
        <h1>{{ $t('iniciativas.titulo') }}</h1>
        <p class="description">{{ $t('iniciativas.subtitulo') }}</p>
        <v-divider class="custom-divider my-4"></v-divider>
      </div>

      <v-row>
        <v-col
          v-for="(item, index) in iniciativasData"
          :key="index"
          cols="12"
          sm="6"
          md="4"
        >
          <v-card class="hover-card">
            <!-- Imagen con título encima -->
            <v-img :src="item.img" height="200" class="card-img">
            </v-img>

            <!-- Descripción corta -->
            <v-card-text>
              <h3>{{ getInitiativeShortDescription(index) }}</h3>
            </v-card-text>

            <!-- Descripción larga (expandible) -->
            <v-expand-transition>
              <div v-if="item.expandido">
                <v-card-text class="text--secondary">
                  {{ getInitiativeLongDescription(index) }}
                </v-card-text>
              </div>
            </v-expand-transition>

            <!-- Botón ver más -->
            <v-card-actions class="justify-end">
              <v-btn rounded @click="toggleExpansion(index)">
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
      iniciativasData: [
        { img: "/img/campañadental.jpg", expandido: false },
        { img: "/img/crecer.jpg", expandido: false },
        { img: "/img/equipo.png", expandido: false },
        { img: "/img/jornada.jpg", expandido: false },
        {
          img: "https://tse4.mm.bing.net/th/id/OIP.uAitzOvsdkLOa7dGAFvrVgHaEK?rs=1&pid=ImgDetMain",
          expandido: false,
        },
        {
          img: "https://th.bing.com/th/id/R.7025f7ee6c3d829d53da099f6f492544?rik=ic5g73Q9O4r3Mg&pid=ImgRaw&r=0",
          expandido: false,
        },
      ],
    };
  },

  computed: {
    iniciativasTranslated() {
      return this.$t("iniciativas.items") || [];
    },
  },

  methods: {
    toggleExpansion(index) {
      this.$set(
        this.iniciativasData[index],
        "expandido",
        !this.iniciativasData[index].expandido
      );
    },
    getInitiativeTitle(index) {
      const item = this.$t("iniciativas.items")[index];
      return item?.titulo || `Iniciativa ${index + 1}`;
    },
    getInitiativeShortDescription(index) {
      const item = this.$t("iniciativas.items")[index];
      return item?.descripcionCorta || "Descripción no disponible";
    },
    getInitiativeLongDescription(index) {
      const item = this.$t("iniciativas.items")[index];
      return item?.descripcionLarga || "Descripción larga no disponible";
    },
  },
};
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap");

$primary: #035928;
$accent: #a65224;
$text-muted: #555555;

* {
  font-family: "Poppins", sans-serif;
}
.section-header{
   .description {
      font-size: 1.5rem;
      color: $text-muted;
      margin: 1.5rem 0;
      text-align: justify;
    }
}

.initiatives-section {
  .custom-divider {
    background-color: $accent !important;
    height: 4px;
    width: 800px;
    margin: 2rem auto;
    border-radius: 2px;
    opacity: 0.9;
  }

  .hover-card {
    border-radius: 1rem;
    overflow: hidden;
    height: 100%;
    transition: all 0.3s ease;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);

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
      font-size: 1.1rem;
      font-weight: 600;
      color: $primary;
      margin: 1rem 0;
      text-align: justify;
    }


    .v-btn {
      background-color: $primary !important;
      color: white !important;
      font-weight: 600;
      margin-right: 1rem;
      transition: all 0.3s ease;

      &:hover {
        background-color: darken($primary, 5%) !important;
      }
    }
  }
}
</style>
