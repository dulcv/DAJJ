<template>
  <v-footer class="footer-section py-6 px-4" padless>
    <v-container class="d-flex justify-space-between align-center flex-wrap">

      <!-- Logo y nombre -->
      <div class="d-flex align-center gap-2 mb-2">
        <v-img
          src="/logo-cima.png"
          alt="Logo CIMA A.C."
          max-height="40"
          max-width="40"
          contain
        />
        <span class="font-weight-bold text-green-darken-4">CIMA A.C.</span>
      </div>

      <!-- Centro: derechos -->
      <div class="text-center text-body-2 mb-2">
        © 2025 CIMA A.C. | Atzitzintla, Puebla
      </div>

      <!-- Redes sociales -->
      <div class="d-flex align-center gap-4 mb-2">
        <span class="text-caption">¡Síguenos en redes sociales!</span>
        <v-btn icon href="https://instagram.com" target="_blank">
          <v-icon>mdi-instagram</v-icon>
        </v-btn>
        <v-btn icon href="https://facebook.com" target="_blank">
          <v-icon>mdi-facebook</v-icon>
        </v-btn>
      </div>

    </v-container>
  </v-footer>
</template>

<script setup>
// No se necesita lógica por ahora
</script>

<style scoped>
.gap-2 {
  gap: 8px;
}
.gap-4 {
  gap: 16px;
}
.footer-section {
  border-top: 1px solid #ccc;
  background: linear-gradient(to right, #f5fafa, #e8f0ed);
  font-family: 'Poppins', sans-serif;
}
</style>
