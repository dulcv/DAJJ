<!-- components/AliadoCard.vue -->
<template>
  <v-hover v-slot="{ hover }">
    <v-card
      :elevation="hover ? 10 : 2"
      class="partner-card"
      :class="{ hovered: hover }"
    >
      <v-avatar size="160" class="mx-auto my-4 avatar-border">
        <v-img :src="img" cover></v-img>
      </v-avatar>
      <v-card-text>
        <p class="partner-description">{{ texto }}</p>
      </v-card-text>
    </v-card>
  </v-hover>
</template>

<script>
export default {
  name: 'AliadoCard',
  props: {
    img: String,
    texto: String
  }
}
</script>
