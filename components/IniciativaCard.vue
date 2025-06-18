<!-- components/IniciativaCard.vue -->
<template>
  <v-card class="modern-card" :to="link">
    <v-img :src="img" height="200px" class="card-img" />
    <v-card-text>
      <h3>{{ titulo }}</h3>
    </v-card-text>
    <v-card-actions>
      <v-btn color="#035928" outlined rounded>
        {{ $t('index.iniciativas.verMas') }} <v-icon right>mdi-plus</v-icon>
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: 'IniciativaCard',
  props: {
    img: String,
    titulo: String,
    link: String
  }
}
</script>
