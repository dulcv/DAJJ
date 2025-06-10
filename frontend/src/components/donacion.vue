<template>

  <div id="app">
    <header>
      <h1>{{ titulo }}</h1>
    </header>

    <!-- Contenido principal -->
    <v-main>
      <v-container>
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


        <!-- Formulario de Donación -->
        <h2 id="donacion" class="text-center mt-10">¡Haz tu donación!</h2>

        <h3>1.Datos personales:</h3>
        <v-form @submit.prevent="pagarConStripe">
          <v-text-field v-model="nombre" label="Nombre completo" outlined dense class="mt-3"></v-text-field>
          <div v-if="errores.nombre" class="campo-error">{{ errores.nombre }}</div>

          <v-text-field v-model="correo" label="Correo electrónico" type="email" outlined dense></v-text-field>
          <div v-if="errores.correo" class="campo-error">{{ errores.correo }}</div>

          <v-text-field v-model="telefono" label="Teléfono" type="tel" outlined dense></v-text-field>
          <div v-if="errores.telefono" class="campo-error">{{ errores.telefono }}</div>



          <h3 class="mt-8">2. Seleccione un monto:</h3>
          <v-row class="montos" dense>
            <v-col v-for="(monto, i) in montos" :key="i" cols="12" sm="3">
              <v-btn :color="montoSeleccionado === monto
                ? 'green darken-2'
                : 'green darken-4'
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
              <div v-if="errores.monto" class="campo-error">{{ errores.monto }}</div>
            </v-col>
          </v-row>

          <v-text-field v-model="comentario" label="Comentario (opcional)" outlined dense></v-text-field>

          <v-btn color="green darken-4" dark block class="mt-6" @click="pagarConStripe" :disabled="loading">
            Donar ahora
          </v-btn>

          <v-alert type="info" v-if="mensaje" class="mt-4" dense border="left" colored-border elevation="2">
            <v-icon left>mdi-shield-check</v-icon>
            {{ mensaje }}
          </v-alert>
          <v-alert type="error" v-if="mensajeError" class="mt-4" dense border="left" colored-border elevation="2">
            <v-icon left>mdi-alert-circle</v-icon>
            {{ mensajeError }}
          </v-alert>
        </v-form>
      </v-container>
    </v-main>

    <!-- <button id="botondonar" type="submit">Donar ahora</button> -->

    <footer>
      <p>CIMA A.C.</p>
    </footer>

  </div>


</template>

<script>
import { loadStripe } from '@stripe/stripe-js';
export default {

  name: 'DonacioneForm',
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

      if (!this.telefono) {
        this.errores.telefono = 'Has olvidado añadir tu teléfono.';
      } else if (!/^\d+$/.test(this.telefono)) {
        this.errores.telefono = 'El teléfono solo debe contener números.';
      } else if (this.telefono.length !== 10) {
        this.errores.telefono = 'El teléfono debe tener exactamente 10 dígitos.';
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

      //Verifica si hay errores antes de continuar
      if (
        this.errores.nombre ||
        this.errores.correo ||
        this.errores.telefono ||
        this.errores.monto
      ) {
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
            telefono: this.telefono,
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

main {
  max-width: 800px;
  margin: 20px auto;
  padding: 20px;
  background: white;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  text-align: left;
}

h2 {
  color: black;
}

.faq {
  margin-top: 20px;
  padding: 15px;
  border: 1px solid black;
  border-radius: 8px;
  box-shadow: 3px 3px 8px rgba(0, 0, 0, 0.3);
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
</style>