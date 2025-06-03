<template>
  <v-app-bar color="white" elevate-on-scroll app class="py-2">
    <v-container class="d-flex align-center justify-space-between">
      <!-- Logo y Nombre -->
      <v-btn to="/" class="d-flex align-center text-decoration-none" text>
        <!-- <v-img src="/logo.png" alt="CIMA A.C." width="50" class="mr-2"></v-img> -->
        <h1 class="text-h6 font-weight-bold green--text">CIMA A.C.</h1>
      </v-btn>
      <!-- Menú horizontal (visible en todas las pantallas) -->
      <v-row class="d-flex align-center" no-gutters>
        <v-btn v-for="(item, i) in menu" :key="i" class="mx-2 nav-link" text :to="item.to">
          {{ item.label }}
        </v-btn>
        <v-btn color="green" class="mx-2" rounded>Donar</v-btn>

        <!-- Idiomas -->
        <v-btn icon><v-icon>mdi-flag</v-icon></v-btn>
        <v-btn text>Esp</v-btn>
        <v-btn text>Eng</v-btn>
      </v-row>
    </v-container>
  </v-app-bar>
</template>

<script setup>
const menu = [
  { label: 'Nosotros', to: '#nosotros' },
  { label: 'Iniciativas', to: '#iniciativas' },
  { label: 'Recursos', to: '#recursos' },
  { label: 'Transparencia', to: '#transparencia' }
]
</script>

<style scoped>
.nav-link {
  text-transform: none;
  color: #2e7d32;
  font-weight: 500;
  position: relative;
  transition: color 0.3s;
}

.nav-link:hover {
  color: #1b5e20;
}

.nav-link::after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0%;
  height: 2px;
  background-color: #2e7d32;
  transition: width 0.3s;
}

.nav-link:hover::after {
  width: 100%;
}

.text-decoration-none {
  text-decoration: none;
}

.green--text {
  color: #2e7d32 !important;
}
</style>
