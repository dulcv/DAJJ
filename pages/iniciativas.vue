<template>
  <v-container class="my-8">
    <v-row>
      <v-col
        v-for="(item, index) in iniciativas"
        :key="index"
        cols="12"
        sm="6"
        md="6"
      >
        <v-card
          class="rounded-lg overflow-hidden d-flex flex-column"
          height="auto"
        >
          <!-- Imagen arriba -->
          <v-img
            :src="item.img"
            height="200"
            class="white--text d-flex align-end"
            gradient="to top, rgba(0,0,0,.7), rgba(0,0,0,0)"
          >
            <v-card-title class="headline">{{ item.title }}</v-card-title>
          </v-img>

          <!-- Texto siempre visible -->
          <v-card-text class="text--secondary">
            {{ item.descripcionCorta }}
          </v-card-text>

          <!-- Texto expandible -->
          <v-expand-transition>
            <div v-if="item.expandido">
              <v-card-text class="text--secondary">
                {{ item.descripcionLarga }}
              </v-card-text>
            </div>
          </v-expand-transition>

          <!-- Botón de flecha -->
          <v-card-actions class="justify-end">
            <v-btn icon @click="item.expandido = !item.expandido">
              <v-icon color="#035928">
                {{ item.expandido ? "mdi-chevron-up" : "mdi-chevron-down" }}
              </v-icon>
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
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
