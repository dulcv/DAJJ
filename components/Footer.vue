<template>
  <v-footer flat class="footer py-6 px-4">
    <v-container fluid class="d-flex align-center justify-space-between flex-wrap">

      <!-- Logo y nombre -->
      <div class="d-flex align-center gap-2">
        <v-img
          src="/logo-cima.png"
          alt="Logo CIMA A.C."
          max-height="40"
          max-width="40"
          contain
        />
        <span class="font-weight-bold text-green-darken-4">CIMA A.C.</span>
      </div>

      <!-- Texto central -->
      <div class="text-center text-body-2 my-2">
        © 2025 CIMA A.C. | Atzitzintla, Puebla
      </div>
      <div>
        <span> Contáctanos
        </span>
      </div>

      <!-- Redes sociales -->
      <div class="d-flex align-center gap-4">
        <span class="text-caption">¡Síguenos en redes sociales!</span>
        <v-btn icon :href="'https://instagram.com'" target="_blank">
          <v-icon>mdi-instagram</v-icon>
        </v-btn>
        <v-btn icon :href="'https://facebook.com'" target="_blank">
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
.footer {
  background: linear-gradient(
    to top,
    rgba(111, 156, 166, 0.45) 0%,
    rgba(245, 245, 245, 0.18) 81%
  );
  border-bottom: 1px solid #ccc;

  backdrop-filter: blur(4px);
}
</style>
