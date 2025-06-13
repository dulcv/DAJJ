<template>
  <v-footer class="footer-section py-10 px-4" padless>
    <v-container>
      <v-row class="text-center text-md-left" align="center" justify="space-between">
        <!-- Logo y nombre -->
        <v-col
          cols="12"
          md="4"
          class="mb-4 mb-md-0 d-flex justify-center justify-md-start align-center"
        >
          <v-img
            src="/logo-cima.png"
            alt="Logo CIMA A.C."
            max-height="60"
            max-width="60"
            contain
            class="mr-4"
          />
          <span class="font-weight-bold text-green-darken-4 text-h5">CIMA A.C.</span>
        </v-col>

        <!-- Centro: derechos -->
        <v-col cols="12" md="4" class="mb-4 mb-md-0 d-flex justify-center">
          <div class="text-subtitle-1">
            © 2025 CIMA A.C. | Atzitzintla, Puebla
          </div>
        </v-col>

        <!-- Redes sociales -->
        <v-col
          cols="12"
          md="4"
          class="d-flex flex-column flex-md-row justify-center justify-md-end align-center gap-md-6"
        >
          <span class="text-subtitle-1 mb-2 mb-md-0">¡Síguenos en redes sociales!</span>
          <div class="d-flex gap-3">
            <v-btn icon href="https://instagram.com" target="_blank">
              <v-icon size="32">mdi-instagram</v-icon>
            </v-btn>
            <v-btn icon href="https://facebook.com" target="_blank">
              <v-icon size="32">mdi-facebook</v-icon>
            </v-btn>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </v-footer>
</template>

<script setup>
// No se necesita lógica por ahora
</script>

<style scoped>
.footer-section {
  background: linear-gradient(
    to top,
    rgba(111, 156, 166, 0.45) 0%,
    rgba(245, 245, 245, 0.18) 81%
  );
  border-bottom: 1px solid #ccc;
  backdrop-filter: blur(4px);
}

.gap-3 {
  gap: 16px;
}

.gap-md-6 {
  gap: 48px;
}
</style>
