<template>

  <div id="app">
    <header>
      <h1>{{ titulo }}</h1>
    </header>

    <!-- Contenido principal -->
    <v-container class="my-8">
      <v-row align="center">
        <v-col cols="12" md="6">
          <h1 class="mb-4" color="#A65224">DONATIVOS</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex non, laboriosam magnam vel vitae officia,
            explicabo earum cumque, voluptate tempora tempore veritatis iusto sed esse facilis quisquam porro quia quas.
          </p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex non, laboriosam magnam vel vitae officia,
            explicabo earum cumque, voluptate tempora tempore veritatis iusto sed esse facilis quisquam porro quia quas.
          </p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex non, laboriosam magnam vel vitae officia,
            explicabo earum cumque, voluptate tempora tempore veritatis iusto sed esse facilis quisquam porro quia quas.
          </p>

        </v-col>
        <v-col cols="12" md="6">
          <v-img src="@/assets/img/donacionImage.jpg" alt="Donacion" max-width="100%" style="border-radius:5%;"></v-img>
        </v-col>
      </v-row>
    </v-container>
    <v-container>
      <!-- Mensaje -->
      <v-alert color="white" type="success" class="my-6 text-center" dense>
        <div class="text-center tarjet">
          <h3 class="font-weight-bold text-h4 mb-2">Tu ayuda transforma vidas</h3>

          <lottie :options="defaultOptions" :height="250" :width="250" />
          <p>Tu donación hace una gran diferencia.</p>
          <p>Nos permite seguir ayudando a quienes más lo necesitan.</p>
          <p><strong>¡Juntos podemos lograr grandes cambios!</strong></p>

          <v-btn color="green darken-2" dark class="mt-4" @click="dialog = true">
            Donar aquí
          </v-btn>
        </div>
      </v-alert>
      <!-- Preguntas Frecuentes -->
      <h2 class="mt-6">Preguntas Frecuentes</h2>
      <v-expansion-panels multiple>
        <v-expansion-panel v-for="(item, i) in preguntas" :key="i">
          <v-expansion-panel-header>{{
            item.pregunta
          }}</v-expansion-panel-header>
          <v-expansion-panel-content>{{
            item.respuesta
          }}</v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </v-container>
    <div>
      <!-- Diálogo con tarjeta -->
      <v-dialog v-model="dialog" max-width="500">
        <v-card>
          <v-card-text>
            <!-- Formulario de Donación -->
            <v-card-title id="donacion" class="text-center">¡Haz tu donación!</v-card-title>

            <h3>1.Datos personales:</h3>
            <v-form @submit.prevent="pagarConStripe">
              <v-text-field v-model="nombre" label="Nombre completo" outlined dense class="mt-3"></v-text-field>
              <div v-if="errores.nombre" class="campo-error">
                {{ errores.nombre }}
              </div>

              <v-text-field v-model="correo" label="Correo electrónico" type="email" outlined dense></v-text-field>
              <div v-if="errores.correo" class="campo-error">
                {{ errores.correo }}
              </div>

                 <vue-phone-number-input
                  ref="phoneInput"
                  v-model="telefono"
                  default-country="MX"
                  placeholder="Ej. +1 416 555 1234"
                />
                  <div v-if="errores.telefono" class="campo-error alert">
                {{ errores.telefono }}
              </div>



              <h3>2. Seleccione un monto:</h3>
              <v-row class="montos" dense>
                <v-col v-for="(monto, i) in montos" :key="i" cols="12" sm="3">
                  <v-btn class="boton" :color="montoSeleccionado === monto ? 'green light-2' : '#035928'
                    " block @click="
                      montoSeleccionado = monto;
                    otro = '';
                    ">
                    {{ monto }}
                  </v-btn>
                </v-col>

                <v-col cols="12" sm="4">
                  <v-text-field v-model="otro" label="Otro monto" type="number" outlined dense
                    @input="montoSeleccionado = ''"></v-text-field>
                  <div v-if="errores.monto" class="campo-error">
                    {{ errores.monto }}
                  </div>
                </v-col>
              </v-row>

              <h3>3. Comentario</h3>
              <v-text-field v-model="comentario" label="Opcional" outlined dense></v-text-field>

              <v-btn color="green darken-4" dark block @click="pagarConStripe" :disabled="loading">
                Donar
              </v-btn>

              <!-- Diálogo de agradecimiento -->
              <v-dialog v-model="messageThanks" max-width="500">
                <messageThanks @cerrar="messageThanks = false" />
              </v-dialog>


              <v-alert type="info" v-if="mensaje" class="mt-4" dense border="left" colored-border elevation="2">
                <v-icon left>mdi-shield-check</v-icon>
                {{ mensaje }}
              </v-alert>
              <v-alert type="error" v-if="mensajeError" class="mt-4" dense border="left" colored-border elevation="2">
                <v-icon left>mdi-alert-circle</v-icon>
                {{ mensajeError }}
              </v-alert>
            </v-form>
          </v-card-text>

          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn text @click="dialog = false">Cancelar</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </div>

    <!-- <button id="botondonar" type="submit">Donar ahora</button> -->

    <footer>
      <p>CIMA A.C.</p>
    </footer>

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
    Lottie, //Para el gif
    messageThanks, //Para el agradecimiento
    VuePhoneNumberInput, //Para el telefono
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
      preguntas: [
        {
          pregunta: '¿Cómo se usa mi donativo?',
          respuesta: '...'
        },
        {
          pregunta: '¿En qué proyectos impacta mi donación?',
          respuesta: '...'
        },
        {
          pregunta: '¿Es seguro donar en línea?',
          respuesta: '...'
        },
        {
          pregunta: '¿Mis datos personales y bancarios están protegidos?',
          respuesta: '...'
        },
        {
          pregunta: '¿Puedo obtener deducción fiscal por mi donación?',
          respuesta: '...'
        },
        {
          pregunta: '¿Cuánto tiempo tarda en llegar mi recibo?',
          respuesta: '...'
        },
        {
          pregunta: '¿Qué beneficios obtengo como donante?',
          respuesta: '...'
        },
        {
          pregunta: '¿Puedo contactar a alguien si tengo dudas sobre mi donación?',
          respuesta: '...'
        }
      ],
      //Campos del formulario
      nombre: '',
      correo: '',
      telefono: '',
      montos: ['$50', '$100', '$200', '$500'],
      montoSeleccionado: '',
      otro: '',
      comentario: '',
      //Mensajes y estados
      mensaje: 'Tus datos están protegidos.',
      mensajeError: '',
      loading: false,
      // Errores por campo
      errores: {
        nombre: '',
        correo: '',
        telefono: '',
        monto: ''
      },
      //Animacion
      defaultOptions: {
        animationData: animacion,
        loop: false,
        autoplay: true,
      },
      //Tarjeta
      dialog: false,
      messageThanks: false
    }
  },

  methods: {
    // enviarDonacion() {
    //     // Aquí puedes manejar el envío de la donación
    //     this.mensaje = '¡Gracias por tu donación!';

    // Método principal para procesar la donación
    async pagarConStripe() {
      this.loading = true
      this.mensajeError = '';
      this.errores = { nombre: '', correo: '', telefono: '', monto: '' };

      //Validaciones
      if (!this.nombre) {
        this.errores.nombre = 'Has olvidado añadir tu nombre.';
      } else if (this.nombre.length < 4) {
        this.errores.nombre = 'El nombre debe tener al menos 4 caracteres.';
      }

      if (!this.correo) {
        this.errores.correo = 'Has olvidado de introducir tu correo electrónico.';
      } else if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,}$/.test(this.correo)) {
        this.errores.correo = 'El correo electrónico no es válido.';
      }

// Extrae solo los dígitos del número nacional
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
  this.errores.telefono = 'Has olvidado añadir tu teléfono.';
  this.loading = false;
  return;
} else if (telefonoLimpio.length !== 10) {
  this.errores.telefono = 'El teléfono debe tener exactamente 10 dígitos.';
  this.loading = false;
  return;
}

      // Calcula el monto en centavos
      let monto = this.montoSeleccionado
        ? parseInt(this.montoSeleccionado.replace('$', '')) * 100
        : parseInt(this.otro) * 100;

      if (!monto || monto <= 0) {
        this.errores.monto = 'Por favor, selecciona o ingresa un monto válido.';
        this.loading = false;
        return;
      }

// Si hay algún error, no continúes
if (Object.values(this.errores).some(e => e)) {
  this.loading = false;
  return;
      }

      try {
        // Llama a tu backend para crear la sesión
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

        // Espera la respuesta del backend con el ID de la sesión de Stripe
        const data = await response.json();

        // Si el backend responde con error, muestra el mensaje
        if (!response.ok) {
          this.mensajeError = data.error || 'Ocurrió un error al procesar el pago.';
          this.loading = false
          return;
        }

        // Redirige a Stripe Checkout
        const stripe = await loadStripe(process.env.VUE_APP_STRIPE_PUBLIC_KEY);
        stripe.redirectToCheckout({ sessionId: data.id });

        //Limpia los campos después de redirigir
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
  }
// created() {
//   const params = new URLSearchParams(window.location.search);
//   const success = params.get('success');

//   if (success === 'true') {
//     console.log('✅ Detectado success=true desde window.location');

//     this.messageThanks = true;

//     // Limpiar la URL (sin recargar)
//     const newUrl = window.location.origin + this.$route.path;
//     window.history.replaceState({}, document.title, newUrl);
//   }
// }
 }

</script>

<style scoped>
body {
  font-family: 'Poppins';
  margin: 0;
  padding: 0;
  background: #f9f9f9;

}

header {
  background: #035928;
  color: white;
  padding: 20px;
  text-align: center;
}



h2 {
  color: black;
}



details {
  margin-bottom: 10px;
}

#donacion {
  text-align: center;
}

form {
  display: flex;
  flex-direction: column;
}

label {
  margin-top: 10px;
}

input {
  padding: 8px;
  margin-top: 5px;
  border: 1px solid #ccc;
  border-radius: 4px;
  background: #d9d9d9;
  width: 50%;
}

input::placeholder {
  color: white;
}

p {
  font-size: 18px;
}

.montos {
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  width: 100%;
  margin-bottom: 20px;
}

.montos input[type="radio"] {
  display: none;
  /* Oculta el círculo */
}

.montos label {
  flex: 1 1 150px;
  padding: 10px;
  text-align: center;
  border: 1px solid #6f9ca6;
  border-radius: 6px;
  cursor: pointer;
  background: #035928;
  color: white;
}

.montos input {
  margin-right: 5px;
}

#botondonar {
  display: block;
  margin: 30px auto 10px auto;
  padding: 12px 30px;
  background: #035928;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  width: 50%;
}

.mensaje-confirmacion {
  text-align: center;
  font-size: 14px;
  color: #555;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  margin-top: 10px;
}

footer {
  background: #f0f0f0;
  text-align: center;
  padding: 15px;
  font-size: 14px;
  color: #555;
}

.montos label.seleccionado {
  background: #1CA63F;
  color: #fff;
  border: 2px solid #1b7f3a;
  font-weight: bold;
  box-shadow: 0 0 8px #1b7f3a;
  transition: background 0.2s, color 0.2s, border 0.2s;
}

.campo-error {
  color: #d32f2f;
  background: #ffd6d6;
  border-radius: 4px;
  font-size: 0.95em;
  margin-top: -10px;
  margin-bottom: 10px;
  padding: 4px 8px;
}

.tarjet {
  color: #035928;
  padding: 20px;
  border: 3px solid #035928;
}

.boton {
  color: white;
}
</style>