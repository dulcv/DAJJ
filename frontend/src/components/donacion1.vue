
<template>

    <div id="app">
        <header>
            <h1>{{ titulo }}</h1>
        </header>

        <main>
        <div class="donacion-mensaje">
  <h3>Tu ayuda transforma vidas</h3>
  <p>
    Cada donación que recibimos nos permite seguir apoyando a quienes más lo necesitan.<br>
    ¡Gracias por sumarte a nuestra causa y confiar en nosotros!
  </p>
  <p>
    <strong>Juntos podemos lograr grandes cambios.</strong>
  </p>

<button @click="mostrarModal = true" id="abrir-modal">Donar aquí</button>

</div>
            <h2>Preguntas Frecuentes</h2>
            <section class="faq">
                <details v-for="(item, i) in preguntas" :key="i">
                    <summary>{{ item.pregunta }}</summary>
                    <p>{{ item.respuesta }}</p>
                </details>
            </section>




 <!-- Modal -->
      <div v-if="mostrarModal" class="modal-overlay">
        <div class="modal">
          <button class="cerrar" @click="mostrarModal = false">X</button>
          <h3>1. Datos personales:</h3>
          <form @submit.prevent="enviarDonacion">
            <label>Nombre completo</label>
            <input type="text" v-model="nombre" placeholder="Ingrese su nombre completo">

            <label>Correo electrónico</label>
            <input type="email" v-model="correo" placeholder="Ingrese su correo electronico">

            <label for="telefono">Teléfono</label>
            <input type="tel" id="telefono" name="telefono" placeholder="Ingrese su telefono" v-model="telefono">

            <h3>2. Seleccione un monto:</h3>
            <div class="montos">
              <label v-for="(monto, i) in montos" :key="i">
                <input type="radio" :value="monto" v-model="montoSeleccionado">
                {{ monto }}
              </label>
              <div class="monto-personalizado">
                <span>Otro:</span>
                <input type="number" v-model="otro" placeholder="Ingresa el monto" />
              </div>
            </div>

            <label for="mensaje">Comentario (opcional)</label>
            <input type="text" id="mensaje" name="mensaje" placeholder="Escribe algun mensaje..." v-model="comentario" />

            <button id="botondonar" type="submit">Donar ahora</button>

            <div class="mensaje-confirmacion" v-if="mensaje">
              <i class="fa fa-shield-alt"></i> {{ mensaje }}
            </div>
          </form>
        </div>
      </div>
    </main>

        <footer>
            <p>CIMA A.C.</p>
        </footer>

    </div>


</template>

<script>
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
            mostrarModal: false,
            nombre: '',
            correo: '',
            telefono: '',
            montos: ['$50', '$100', '$200', '$500'],
            montoSeleccionado: '',
            otro: '',
            comentario: '',
            mensaje: 'Tus datos están protegidos.'
        }
    },
    methods: {
        enviarDonacion() {
            // Aquí puedes manejar el envío de la donación
            this.mensaje = '¡Gracias por tu donación!';
        }
    }
}

</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Poppins:400,700&display=swap');
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
  display: none; /* Oculta el círculo */
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


.modal-overlay {
  position: fixed;
  top: 0; left: 0; right: 0; bottom: 0;
  background: rgba(0,0,0,0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
}
.modal {
  background: white;
  padding: 30px 20px;
  border-radius: 10px;
  max-width: 500px;
  width: 90%;
  position: relative;
}
.cerrar {
  position: absolute;
  top: 10px; right: 10px;
  background: transparent;
  border: none;
  font-size: 18px;
  cursor: pointer;
}

#abrir-modal {
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

.donacion-mensaje {
  background: #e8f5e9;
  border-left: 6px solid #035928;
  padding: 18px 24px;
  margin: 30px 0 20px 0;
  border-radius: 8px;
  text-align: center;
  color: #035928;
  font-size: 1.1em;
}
.donacion-mensaje h3 {
  margin-top: 0;
  margin-bottom: 8px;
  color: #035928;
  font-size: 1.4em;
}
.donacion-mensaje strong {
  color: #1b7f3a;
}
</style>