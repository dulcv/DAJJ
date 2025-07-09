<template>
  <section class="initiatives-section">
    <v-container v-for="(docs, categoria) in documentosPorCategoria" :key="categoria">
      <h2 class="categoria-titulo">{{ categoria }}</h2>
      <v-row  v-if="docs.length">
        <v-col
          v-for="(doc, index) in docs"
          :key="index"
          cols="12"
          sm="6"
          md="4"
        >
          <v-card class="hover-card">
            <!-- Imagen del documento -->
            <v-img
            :src="doc.img || '/img/image.png'"
            height="170"
            contain
            class="d-flex justify-center align-center"
            ></v-img>

            <!-- Título / Nombre del documento -->
            <v-card-text>
              <h3>{{ doc.nombre }}</h3>
              <p class="tipo">{{obtenerTipo(doc.url) }}</p>
            </v-card-text>


            <!-- Boton -->
            <v-card-actions class="justify-end">
              <!-- Descargar -->
              <v-btn color="primary" :href="doc.url" :download="doc.nombre" rounded outlined>
                  <v-icon>mdi-download</v-icon>
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
      
       <!-- Si NO hay documentos -->
      <div v-else class="mensaje-vacio">
        <v-icon large color="grey lighten-1">mdi-folder-open</v-icon>
        <p>No hay documentos disponibles</p>
      </div>
      
    </v-container>
  </section>

</template>

<script>
export default {
  data() {
    return {
      documentos: [
        {
          nombre: 'Documento 1',
          url: '/files/Etiquetas en HTML.pdf',
          img: '/img/path1.png',
          categoria:'Legal'
        },
        {
          nombre: 'Documento 2',
          url: '/files/Etiquetas en HTML.pdf',
          img: '',  // o deja vacío para usar imagen por defecto
          categoria:'Financiero'
        },
        {
          nombre: 'Documento 3',
          url: '/files/doc3.pdf',
          categoria:'Informativo'
        },
              {
          nombre: 'Documento 4',
          url: '/files/Etiquetas en HTML.pdf',
          img: '/img/path1.png',
          categoria:'Informativo'
        },
        {
          nombre: 'Documento 5',
          url: '/files/Etiquetas en HTML.pdf',
          img: '', 
          categoria:'Legal'
        },
        {
          nombre: 'Documento 6',
          url: '/files/doc3.pdf',
          categoria:'Financiero'
        }
      ]
    }
  },
      //CATEGORIA
    computed:{
      documentosPorCategoria(){
        const agrupados = {};
        this.documentos.forEach(doc => {
          const categoria = doc.categoria || 'Sin Categoria';
          if(!agrupados[categoria]) agrupados[categoria] = [];
          agrupados [categoria].push(doc);
        });
        return agrupados;
      }
    },

  //TIPO DE DOCUMENTO
  methods: {
    obtenerTipo(url) {
      const ext = url.split('.').pop()
      return `Tipo: ${ext.toUpperCase()}`
    }
  },
}
</script>

<style scoped lang="scss">

// Variables
$primary: #035928;
$accent: #a65224;
$text-muted: #555555;

// Sección de iniciativas
.initiatives-section {
  //TITULO DE LA CATEGORIA
  .categoria-titulo {
  font-size: 1.6rem;
  font-weight: bold;
  color: $primary;
  margin: 2rem 0 1rem;
  border-bottom: 0.125rem solid $accent;
  padding-bottom: 0.5rem;
}

  .hover-card {
    border-radius: 1rem;
    overflow: hidden;
    height: 100%;
    transition: all 0.3s ease;
    box-shadow: 0 0.25rem 0.625rem rgba(0, 0, 0, 0.05);

    &:hover {
      transform: translateY(-0.5rem);
      box-shadow: 0 0.625rem 1.25rem rgba(0, 0, 0, 0.1);
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
      display: block;
      margin-left: auto;
      margin-right: 1rem;
      position: relative;
      top: -15px;
      padding-top:5px;

      &:hover {
        background-color: darken($primary, 5%) !important;
      }

    }
  }
}

//Mensaje vacio

.mensaje-vacio {
  text-align: center;
  font-size: 1.5em;
  color: $text-muted;
  margin-top: 50px;
}

</style>