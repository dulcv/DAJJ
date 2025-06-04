<template>
  <v-footer class="footer-section" padless>
    <v-container class="d-flex justify-space-between align-center flex-wrap py-6">

      <!-- Logo y nombre -->
      <div class="d-flex align-center">
        <v-img src="/img/logo-cima.png" max-width="40" class="mr-3"></v-img>
        <span class="text-subtitle-1 font-weight-bold text-success">CIMA A.C.</span>
      </div>

      <!-- Centro: derechos -->
      <div class="text-center my-2">
        <span class="text-body-2">
          © 2025 CIMA A.C. | Atzitzintla, Puebla
        </span>
      </div>

      <!-- Redes sociales -->
      <div class="text-right my-2">
        <div class="text-caption mb-1">¡Síguenos en redes sociales!</div>
        <v-icon class="mr-2" size="24">mdi-instagram</v-icon>
        <v-icon size="24">mdi-facebook</v-icon>
      </div>

    </v-container>
  </v-footer>
</template>

<style scoped>
.footer-section {
  border-top: 1px solid #ccc;
  background: linear-gradient(to right, #f5fafa, #e8f0ed);
  font-family: 'Poppins', sans-serif;
}
</style>
