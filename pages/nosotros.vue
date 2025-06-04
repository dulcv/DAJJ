<template>
  <div>

    <!-- Componente del Navbar -->
    <Navbar />
    <v-container>
      <!-- Misión y Visión -->
      <v-row>
        <v-col cols="12" md="6">
          <v-card class="pa-3">
            <v-img src="/image.jpg" height="200px"></v-img>
            <v-card-title>Misión</v-card-title>
            <v-card-text>
              Articular talento y recursos de los sectores social, público y privado para diseñar
              e implementar proyectos que atiendan los retos ambientales, sociales y económicos de Atzitzintla
              y la región Ciudad Serdán, complementando la acción gubernamental y promoviendo bienestar colectivo.
            </v-card-text>
          </v-card>
        </v-col>

        <v-col cols="12" md="6">
          <v-card class="pa-3">
            <v-img src="/image.jpg" height="200px"></v-img>
            <v-card-title>Visión</v-card-title>
            <v-card-text>
              <p class="font-weight-bold mb-2">
                Para 2030, CIMA A.C. se consolidará como referente regional por:
              </p>
              <v-list dense>
                <v-list-item v-for="(punto, i) in visionPuntos" :key="i">
                  <v-list-item-icon>
                    <v-icon color="green">mdi-check</v-icon>
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
          <h2 class="text-center">Nuestros Valores</h2>
        </v-col>
        <v-col
          v-for="(valor, i) in valores"
          :key="i"
          cols="6"
          md="4"
          class="text-center"
        >
          <v-card class="pa-4">
            <v-icon size="48" color="primary">{{ valor.icono }}</v-icon>
            <p class="mt-2">{{ valor.texto }}</p>
          </v-card>
        </v-col>
      </v-row>

      <!-- Agenda 2030 -->
      <v-row>
        <v-col cols="12">
          <h2 class="text-center">Nuestro Aporte a la Agenda 2030</h2>
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
    </v-container>
  </div>
</template>

<script setup>
import Navbar from '@/components/Navbar.vue'

const valores = [
  { icono: 'mdi-lightbulb-on-outline', texto: 'Innovación' },
  { icono: 'mdi-hand-heart', texto: 'Solidaridad' },
  { icono: 'mdi-leaf', texto: 'Sostenibilidad' },
  { icono: 'mdi-account-group', texto: 'Juventud' },
  { icono: 'mdi-shield-check', texto: 'Transparencia' },
  { icono: 'mdi-account-voice', texto: 'Inclusión' }
]

const visionPuntos = [
  'Conservar y restaurar el entorno del Parque Nacional Pico de Orizaba.',
  'Garantizar servicios básicos y reducir marginación y rezago social.',
  'Elevar la calidad de la educación y la salud.',
  'Impulsar el desarrollo económico local y solidario que genere empleo digno.',
  'Canalizar la fuerza y el liderazgo de las juventudes como motor de transformación.',
  'Ejercer buena gobernanza y transparencia en las finanzas, inspirando confianza entre donantes y aliados.'
]

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
]
</script>

<style scoped>
h2 {
  font-weight: bold;
  margin-bottom: 1rem;
}
</style>
