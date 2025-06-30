<template>
  <div id="app">
    <!-- Hero Section -->
    <section class="hero-section">
      <v-container class="py-16">
        <v-row align="center">
          <v-col cols="12" md="6">
            <h1 class="display-1 font-weight-bold white--text mb-4">
              {{ $t('donaciones.titulo') }}
            </h1>
            <p class="headline white--text mb-4 font-weight-light">
              {{ $t('donaciones.subtitulo') }}
            </p>
            <p class="title white--text mb-6 font-weight-light">
              {{ $t('donaciones.descripcion') }}
            </p>
            
            <!-- iconos que indican que el sitio web es seguro-->
            <div class="d-flex flex-wrap mb-6">
              <v-chip color="white" text-color="green darken-2" small class="mr-3 mb-2">
                <v-icon left small>mdi-shield-check</v-icon>
                {{ $t('donaciones.seguridad.seguro') }}
              </v-chip>
              <!-- <v-chip color="white" text-color="green darken-2" small class="mr-3 mb-2">
                <v-icon left small>mdi-check-circle</v-icon>
                {{ $t('donaciones.seguridad.deducible') }}
              </v-chip> -->
              <v-chip color="white" text-color="green darken-2" small class="mr-3 mb-2">
                <v-icon left small>mdi-heart</v-icon>
                {{ $t('donaciones.seguridad.impacto') }}
              </v-chip>
            </div>
          </v-col>
          <v-col cols="12" md="6">
            <v-img 
              src="/img/participacion.jpg" 
              alt="Donación" 
              class="rounded-xl elevation-8"
              height="400"
            />
          </v-col>
        </v-row>
      </v-container>
    </section>

    <!-- CTA Section -->
    <v-container class="my-12">
      <v-card class="cta-card pa-8 text-center" elevation="8">
        <v-avatar size="80" color="green darken-2" class="mb-6">
          <v-icon size="40" color="white">mdi-gift</v-icon>
        </v-avatar>
        
        <h2 class="text-h4 font-weight-bold green--text text--darken-2 mb-4">
          {{ $t('donaciones.cta.titulo') }}
        </h2>
        
        <lottie :options="defaultOptions" :height="200" :width="200" class="mx-auto mb-4" />
        
        <p class="text-h6 mb-2">{{ $t('donaciones.cta.mensaje1') }}</p>
        <p class="text-h6 mb-2">{{ $t('donaciones.cta.mensaje2') }}</p>
        <p class="text-h5 font-weight-bold green--text text--darken-2 mb-6">
          {{ $t('donaciones.cta.mensaje3') }}
        </p>
        
        <v-btn 
          color="green darken-2" 
          dark 
          large 
          class="px-8"
          @click="dialog = true"
        >
          <v-icon left>mdi-heart</v-icon>
          {{ $t('donaciones.cta.boton') }}
        </v-btn>
      </v-card>
    </v-container>

    <!-- FAQ Section -->
    <v-container class="my-12">
      <div class="text-center mb-8">
        <h2 class="text-h4 font-weight-bold green--text text--darken-2 mb-4">
          {{ $t('donaciones.faq.titulo') }}
        </h2>
        <p class="text-h6 grey--text">
          {{ $t('donaciones.faq.subtitulo') }}
        </p>
      </div>

      <v-expansion-panels multiple class="faq-panels">
        <v-expansion-panel 
          v-for="(item, i) in faqItems" 
          :key="i"
          class="mb-2"
        >
          <v-expansion-panel-header class="text-h6 font-weight-medium">
            {{ $t(`donaciones.faq.preguntas.${item}.pregunta`) }}
          </v-expansion-panel-header>
          <v-expansion-panel-content class="text-body-1 grey--text text--darken-1">
            {{ $t(`donaciones.faq.preguntas.${item}.respuesta`) }}
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </v-container>

    <!-- Modal de Donación -->
    <v-dialog v-model="dialog" max-width="600" persistent>
      <v-card class="donation-modal">
        <v-card-title class="text-center pa-6 green lighten-5">
          <div class="w-100 text-center">
            <v-icon color="green darken-2" size="40" class="mb-2">mdi-heart</v-icon>
            <h2 class="text-h5 green--text text--darken-2">
              {{ $t('donaciones.formulario.titulo') }}
            </h2>
          </div>
        </v-card-title>

        <v-card-text class="pa-6">
          <v-form @submit.prevent="pagarConStripe">
            <!-- Datos personales -->
            <div class="mb-6">
              <h3 class="text-h6 font-weight-medium mb-4 d-flex align-center">
                <v-icon color="green darken-2" class="mr-2">mdi-account</v-icon>
                {{ $t('donaciones.formulario.datos_personales') }}
              </h3>
              
              <v-text-field 
                v-model="nombre" 
                :label="$t('donaciones.formulario.nombre')"
                outlined 
                dense 
                class="mb-2"
                :error-messages="errores.nombre"
              />

              <v-text-field 
                v-model="correo" 
                :label="$t('donaciones.formulario.correo')"
                type="email" 
                outlined 
                dense 
                class="mb-2"
                :error-messages="errores.correo"
              />

              <vue-phone-number-input
                ref="phoneInput"
                v-model="telefono"
                default-country="MX"
                :placeholder="$t('donaciones.formulario.telefono')"
                class="mb-2"
              />
              <div v-if="errores.telefono" class="campo-error">
                {{ errores.telefono }}
              </div>
            </div>

            <!-- Selección de monto -->
            <div class="mb-6">
              <h3 class="text-h6 font-weight-medium mb-4 d-flex align-center">
                <v-icon color="green darken-2" class="mr-2">mdi-credit-card</v-icon>
                {{ $t('donaciones.formulario.monto') }}
              </h3>
              
              <v-row dense class="mb-4">
                <v-col v-for="(monto, i) in montos" :key="i" cols="6" sm="3">
                  <v-btn 
                    block
                    :color="montoSeleccionado === monto ? 'green darken-2' : 'grey lighten-2'"
                    :dark="montoSeleccionado === monto"
                    @click="montoSeleccionado = monto; otro = ''"
                    class="amount-btn"
                  >
                    {{ monto }}
                  </v-btn>
                </v-col>
              </v-row>

              <v-text-field 
                v-model="otro" 
                :label="$t('donaciones.formulario.otro_monto')"
                type="number" 
                outlined 
                dense
                @input="montoSeleccionado = ''"
                :error-messages="errores.monto"
              />
            </div>

            <!-- Comentario -->
            <div class="mb-6">
              <h3 class="text-h6 font-weight-medium mb-4">
                {{ $t('donaciones.formulario.comentario') }}
              </h3>
              <v-textarea 
                v-model="comentario" 
                :placeholder="$t('donaciones.formulario.comentario_placeholder')"
                outlined 
                dense
                rows="3"
              />
            </div>

            <!-- Mensaje de seguridad -->
            <v-alert 
              type="info" 
              outlined
              class="mb-4"
              border="left"
            >
              <div class="d-flex align-center">
                <v-icon color="blue" class="mr-2">mdi-lock</v-icon>
                <div>
                  <div class="font-weight-medium">{{ $t('donaciones.formulario.seguridad_mensaje') }}</div>
                  <div class="text-caption">{{ $t('donaciones.formulario.seguridad_descripcion') }}</div>
                </div>
              </div>
            </v-alert>

            <!-- Mensajes de error/éxito -->
            <v-alert 
              v-if="mensajeError" 
              type="error" 
              class="mb-4" 
              dense 
              border="left"
            >
              <v-icon left>mdi-alert-circle</v-icon>
              {{ mensajeError }}
            </v-alert>
          </v-form>
        </v-card-text>

        <v-card-actions class="pa-6 pt-0">
          <v-btn 
            text 
            large
            @click="dialog = false"
            class="flex-grow-1"
          >
            {{ $t('donaciones.formulario.cancelar') }}
          </v-btn>
          <v-btn 
            color="green darken-2" 
            dark 
            large
            @click="pagarConStripe" 
            :loading="loading"
            class="flex-grow-1"
          >
            <v-icon left>mdi-heart</v-icon>
            {{ $t('donaciones.formulario.donar') }}
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <!-- Diálogo de agradecimiento -->
    <v-dialog v-model="messageThanks" max-width="500">
      <messageThanks @cerrar="messageThanks = false" />
    </v-dialog>


  </div>
</template>

<script>
import { loadStripe } from '@stripe/stripe-js';
import Lottie from "vue-lottie";
import animacion from "@/assets/gif/Animation - 1749592877393";
import messageThanks from "@/components/messageThanks.vue";
import VuePhoneNumberInput from "vue-phone-number-input";
import "vue-phone-number-input/dist/vue-phone-number-input.css";

export default {
  components: {
    Lottie,
    messageThanks,
    VuePhoneNumberInput,
  },
  computed: {
    isValidPhone() {
      return this.$refs.phoneInput ? this.$refs.phoneInput.isValid() : false;
    }
  },
  name: 'DonacionForm',
  data() {
    return {
      titulo: 'CIMA A.C.',
      faqItems: ['uso', 'proyectos', 'seguridad', 'datos', 'fiscal', 'recibo', 'beneficios', 'contacto'],
      
      // Campos del formulario
      nombre: '',
      correo: '',
      telefono: '',
      montos: ['$50', '$100', '$200', '$500'],
      montoSeleccionado: '',
      otro: '',
      comentario: '',
      
      // Mensajes y estados
      mensaje: '',
      mensajeError: '',
      loading: false,
      
      // Errores por campo
      errores: {
        nombre: '',
        correo: '',
        telefono: '',
        monto: ''
      },
      
      // Animación
      defaultOptions: {
        animationData: animacion,
        loop: false,
        autoplay: true,
      },
      
      // Modales
      dialog: false,
      messageThanks: false
    }
  },
  methods: {
    async pagarConStripe() {
      this.loading = true
      this.mensajeError = '';
      this.errores = { nombre: '', correo: '', telefono: '', monto: '' };

      // Validaciones
      if (!this.nombre) {
        this.errores.nombre = this.$t('donaciones.errores.nombre_requerido');
      } else if (this.nombre.length < 4) {
        this.errores.nombre = this.$t('donaciones.errores.nombre_corto');
      }

      if (!this.correo) {
        this.errores.correo = this.$t('donaciones.errores.correo_requerido');
      } else if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,}$/.test(this.correo)) {
        this.errores.correo = this.$t('donaciones.errores.correo_invalido');
      }

      // Validación de teléfono
      let telefonoLimpio = '';
      if (
        typeof this.telefono === 'object' &&
        this.telefono &&
        typeof this.telefono.nationalNumber === 'string' &&
        this.telefono.nationalNumber.trim() !== ''
      ) {
        telefonoLimpio = this.telefono.nationalNumber.replace(/\D/g, '');
      } else if (typeof this.telefono === 'string') {
        telefonoLimpio = this.telefono.replace(/\D/g, '');
      }

      if (!telefonoLimpio) {
        this.errores.telefono = this.$t('donaciones.errores.telefono_requerido');
        this.loading = false;
        return;
      } else if (telefonoLimpio.length !== 10) {
        this.errores.telefono = this.$t('donaciones.errores.telefono_invalido');
        this.loading = false;
        return;
      }

      // Validación de monto
      let monto = this.montoSeleccionado
        ? parseInt(this.montoSeleccionado.replace('$', '')) * 100
        : parseInt(this.otro) * 100;

      if (!monto || monto <= 0) {
        this.errores.monto = this.$t('donaciones.errores.monto_requerido');
        this.loading = false;
        return;
      }

      // Si hay errores, no continuar
      if (Object.values(this.errores).some(e => e)) {
        this.loading = false;
        return;
      }

      try {
        // Llamada al backend
        const response = await fetch('http://localhost:3000/api/payments/create-checkout-session', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            amount: monto,
            nombre: this.nombre,
            correo: this.correo,
            telefono: telefonoLimpio,
            comentario: this.comentario
          }),
        });

        const data = await response.json();

        if (!response.ok) {
          this.mensajeError = data.error || 'Ocurrió un error al procesar el pago.';
          this.loading = false
          return;
        }

        // Redirigir a Stripe
        const stripe = await loadStripe(process.env.VUE_APP_STRIPE_PUBLIC_KEY);
        stripe.redirectToCheckout({ sessionId: data.id });

        // Limpiar campos
        this.nombre = '';
        this.correo = '';
        this.telefono = '';
        this.montoSeleccionado = '';
        this.otro = '';
        this.comentario = '';
      } catch (error) {
        this.mensajeError = 'No se pudo conectar con el servidor. Intenta más tarde.';
      } finally {
        this.loading = false;
      }
    }
  },
  head() {
    return {
      title: `${this.$t('donaciones.titulo')} - CIMA A.C.`,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.$t('donaciones.subtitulo')
        }
      ]
    }
  }
}
</script>

<style scoped>
/* Hero Section */
.hero-section {
  background: linear-gradient(135deg, #2E7D32 0%, #388E3C 100%);
  min-height: 500px;
  display: flex;
  align-items: center;
}

/* CTA Card */
.cta-card {
  background: linear-gradient(135deg, #E8F5E8 0%, #F1F8E9 100%);
  border: 2px solid #4CAF50;
  border-radius: 20px;
}

/* FAQ Panels */
.faq-panels .v-expansion-panel {
  border-radius: 12px !important;
  margin-bottom: 8px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1) !important;
}

.faq-panels .v-expansion-panel::before {
  box-shadow: none;
}

/* Modal de donación */
.donation-modal {
  border-radius: 16px;
  overflow: hidden;
}

.amount-btn {
  height: 48px !important;
  border-radius: 8px;
  font-weight: 600;
}

/* Campo de error */
.campo-error {
  color: #d32f2f;
  background: #ffd6d6;
  border-radius: 4px;
  font-size: 0.875em;
  margin-top: 4px;
  margin-bottom: 8px;
  padding: 4px 8px;
}

/* Footer */
.footer-section {
  background: #f5f5f5;
  padding: 20px 0;
  margin-top: 60px;
  border-top: 1px solid #e0e0e0;
}

/* Responsive */
@media (max-width: 960px) {
  .hero-section {
    min-height: 400px;
  }
}
</style>