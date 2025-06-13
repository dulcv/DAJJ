<template>
  <div>
    <v-container>
      <!-- Misión y Visión -->
      <v-row>
        <v-col cols="12" md="6">
          <v-card class="pa-1">
            <v-img src="img/participacion.jpg" height="200px"></v-img>
            <v-card-title
              class="text-h4 font-weight-bold"
              :style="{ color: '#035928', fontFamily: 'Poppins, sans-serif' }"
            >
               {{ $t('nosotros.mision.titulo') }}
            </v-card-title>
            <v-card-text
              :style="{ fontFamily: 'Poppins, sans-serif', textAlign: 'justify', lineHeight: '3' }"
            >
              {{ $t('nosotros.mision.texto') }}
            </v-card-text>
          </v-card>
        </v-col>

        <v-col cols="12" md="6">
          <v-card class="pa-1">
            <v-img src="img/crecer.jpg" height="200px"></v-img>
            <v-card-title
              class="text-h4 font-weight-bold"
              :style="{ color: '#035928', fontFamily: 'Poppins, sans-serif' }"
            >
             {{ $t('nosotros.vision.titulo') }}
            </v-card-title>
            <v-card-text>
              <p
                class="mb-2"
                :style="{ fontFamily: 'Poppins, sans-serif', textAlign: 'justify', lineHeight: '1.8' }"
              >
                  {{ $t('nosotros.vision.descripcion') }}
              </p>
              <v-list dense>
                <v-list-item v-for="(punto, i) in visionPuntos" :key="i">
                  <v-list-item-icon>
                    <v-icon color="#1CA63F">mdi-check</v-icon>
                  </v-list-item-icon>
                  <v-list-item-content>
                    <v-list-item-title>{{ punto }}</v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
              </v-list>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>

      <!-- Valores -->
      <v-row class="my-10">
        <v-col cols="12">
          <h2 class="text-center">  {{ $t('nosotros.valores.titulo') }}</h2>
        </v-col>
        <v-col
          v-for="(valor, i) in valores"
          :key="i"
          cols="6"
          md="4"
          class="text-center"
        >
          <v-card class="pa-7 rounded-xl" style="border: 1px solid #6F9CA6;">
            <v-icon :color="valor.color" size="100">{{ valor.icono }}</v-icon>
            <p class="mt-2 text-h6 font-weight-bold" :style="{ color: valor.color }">
              {{ valor.texto }}
            </p>
          </v-card>
        </v-col>
      </v-row>

      <!-- Agenda 2030 -->
      <v-row>
        <v-col cols="12">
          <h2 class="text-center">Agenda 2030</h2>
          <v-list>
            <v-list-item v-for="(ods, i) in odsList" :key="i">
              <v-list-item-icon>
                <v-icon color="green">mdi-plus-circle</v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title>{{ ods }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-col>
      </v-row>

      <!-- Equipo -->
      <v-container class="my-12 text-center">
        <h2 class="text-center"> {{ $t('nosotros.equipo.titulo') }}</h2>
        <p class="text-body-1 mb-6" :style="{ textAlign: 'justify', lineHeight: '2' }">
           {{ $t('nosotros.equipo.descripcion') }}
        </p>
        <v-row>
          <v-col
            v-for="(miembro, index) in miembros"
            :key="index"
            cols="12"
            sm="6"
            md="4"
            class="text-center"
          >
            <v-img
              :src="miembro.imagen"
              aspect-ratio="1"
              class="rounded-lg elevation-2"
            ></v-img>
            <h3 class="mt-4 font-weight-bold text-h5" :style="{ color: '#A65224' }">
              {{ miembro.titulo }}
            </h3>
            <p :style="{ lineHeight: '2' }" class="text-body-2">{{ miembro.descripcion }}</p>
          </v-col>
        </v-row>
      </v-container>
    </v-container>
  </div>
</template>

<script setup>
const valores = [
  { icono: 'mdi-lightbulb-on-outline', texto: 'Innovación', color: '#005977' },
  { icono: 'mdi-hand-heart', texto: 'Solidaridad', color: '#e3c77b' },
  { icono: 'mdi-leaf', texto: 'Sostenibilidad', color: 'green' },
  { icono: 'mdi-account-group', texto: 'Juventud', color: '#6F9CA6' },
  { icono: 'mdi-shield-check', texto: 'Transparencia', color: '#A65224' },
  { icono: 'mdi-account-voice', texto: 'Inclusión', color: '#ff7c00' }
];

const visionPuntos = [
  'Conservar y restaurar el entorno del Parque Nacional Pico de Orizaba.',
  'Garantizar servicios básicos y reducir marginación y rezago social.',
  'Elevar la calidad de la educación y la salud.',
  'Impulsar el desarrollo económico local y solidario que genere empleo digno.',
  'Canalizar la fuerza y el liderazgo de las juventudes como motor de transformación.',
  'Ejercer buena gobernanza y transparencia en las finanzas, inspirando confianza entre donantes y aliados.'
];

const odsList = [
  'ODS 3: Salud y Bienestar',
  'ODS 4: Educación de Calidad',
  'ODS 8: Trabajo Decente y Crecimiento Económico',
  'ODS 10: Reducción de las Desigualdades',
  'ODS 11: Ciudades y Comunidades Sostenibles',
  'ODS 13: Acción por el Clima',
  'ODS 15: Vida de Ecosistemas Terrestres',
  'ODS 16: Paz, Justicia e Instituciones Sólidas',
  'ODS 17: Alianzas para Lograr los Objetivos'
];

const miembros = [
  {
    imagen: '/img/equipo1.jpg',
    titulo: 'Presidente',
    descripcion: 'Responsable de la representación legal y liderazgo estratégico de la organización.'
  },
  {
    imagen: '/img/equipo2.jpg',
    titulo: 'Secretario',
    descripcion: 'Encargado de la documentación, actas y comunicaciones institucionales.'
  },
  {
    imagen: '/img/equipo3.jpg',
    titulo: 'Tesorero',
    descripcion: 'Administra los recursos financieros y la rendición de cuentas.'
  },
  {
    imagen: '/img/equipo4.jpg',
    titulo: 'Director de Operaciones',
    descripcion: 'Coordina la ejecución de proyectos y el equipo de trabajo en campo.'
  },
  {
    imagen: '/img/equipo5.jpg',
    titulo: 'Director de Comunicación',
    descripcion: 'Gestiona la identidad institucional, redes sociales y vínculos con medios.'
  },
  {
    imagen: '/img/equipo6.jpg',
    titulo: 'Director de Finanzas',
    descripcion: 'Diseña estrategias de sostenibilidad financiera y control presupuestal.'
  }
];

</script>

<style scoped>
h2 {
  font-weight: bold;
  margin-bottom: 1rem;
  font-family: Poppins;
  color: #035928;
  font-size: 30px;
}
</style>
