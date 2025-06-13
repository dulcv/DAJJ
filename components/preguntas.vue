<template>
  <v-container class="faq-section py-8" style="max-width: 1000px;">
    <!-- Encabezado con decoración -->
    <div class="text-center mb-8">
      <h1 class="section-title">Preguntas <span>Frecuentes</span></h1>
      <v-divider
        color="#A65224"
        :thickness="2"
        class="divider mx-auto my-4"
        width="80px"
      ></v-divider>
      <p class="section-subtitle">
        Encuentra respuestas rápidas a las preguntas más comunes sobre nuestro trabajo
      </p>
    </div>

    <!-- Contenedor de dos columnas para acordeones -->
    <v-row>
      <v-col cols="12" md="6">
        <v-expansion-panels accordion class="elevation-0">
          <v-expansion-panel
            v-for="(item, index) in faqsLeft"
            :key="'left-' + index"
            class="faq-card mb-4"
          >
            <v-expansion-panel-header
              class="question py-4 px-6"
              expand-icon="mdi-plus"
              collapse-icon="mdi-minus"
            >
              <span class="question-text">{{ item.pregunta }}</span>
            </v-expansion-panel-header>
            <v-expansion-panel-content class="answer px-6 pb-4">
              <p class="answer-text">{{ item.respuesta }}</p>
              <v-btn
                v-if="item.link"
                color="#1CA63F"
                text
                small
                :href="item.link"
                class="mt-2 more-btn"
              >
                Más información
                <v-icon right small>mdi-arrow-right</v-icon>
              </v-btn>
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-col>

      <v-col cols="12" md="6">
        <v-expansion-panels accordion class="elevation-0">
          <v-expansion-panel
            v-for="(item, index) in faqsRight"
            :key="'right-' + index"
            class="faq-card mb-4"
          >
            <v-expansion-panel-header
              class="question py-4 px-6"
              expand-icon="mdi-plus"
              collapse-icon="mdi-minus"
            >
              <span class="question-text">{{ item.pregunta }}</span>
            </v-expansion-panel-header>
            <v-expansion-panel-content class="answer px-6 pb-4">
              <p class="answer-text">{{ item.respuesta }}</p>
              <v-btn
                v-if="item.link"
                text
                small
                :href="item.link"
                class="mt-2 more-btn"
              >
                Más información
                <v-icon right small>mdi-arrow-right</v-icon>
              </v-btn>
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-col>
    </v-row>

    <!-- CTA -->
    <div class="text-center mt-8">
      <v-btn
        color="#A65224"
        dark
        large
        rounded
        class="px-6 cta-btn"
        @click="$emit('contact')"
      >
        <v-icon left>mdi-email</v-icon>
        ¿Necesitas más ayuda? Escríbenos
      </v-btn>
    </div>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      faqs: [
        {
          pregunta: "¿Qué tipo de proyectos desarrolla CIMA A.C.?",
          respuesta: "Desarrollamos proyectos enfocados en la conservación del medio ambiente, educación, salud, desarrollo económico local y fortalecimiento comunitario. Ejemplos incluyen reforestación en el Parque Nacional Pico de Orizaba, orientación vocacional y cursos de programación para jóvenes.",
        },
        {
          pregunta: "¿Quiénes forman parte del equipo de CIMA A.C.?",
          respuesta: ""
        },

      ]
    }
  },
  computed: {
    // Divide el arreglo faqs en dos partes para las dos columnas
    faqsLeft() {
      return this.faqs.filter((_, i) => i % 2 === 0);
    },
    faqsRight() {
      return this.faqs.filter((_, i) => i % 2 !== 0);
    }
  }
}
</script>

<style scoped>
:root {
  --color-neutral: #555555;
  --color-primary: #035928;
  --color-secondary: #1CA63F;
  --color-light: #F2E0BD;
  --color-accent: #A65224;
  --font-family: 'Poppins',  sans-serif;
}

.faq-section {
  background-color: #fff;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0,0,0,0.08);
  max-width: 1000px;
  margin: 0 auto;
  padding: 48px 40px;
  font-family: var(--font-family);
  font-weight: 400;
}

.section-title {
  font-size: 3rem;
      font-weight: 800;
      color: #035928;
      line-height: 1.1;
      margin-bottom: 1rem;
      font-family: 'Poppins', sans-serif;
}


.section-subtitle {
  color: #555555;
  font-size: 1.15rem;
  max-width: 600px;
  margin: 0 auto 36px;
  text-align: center;
  font-weight: 400;
  line-height: 1.5;
   font-family: 'Poppins', sans-serif;
}

.divider {
  width: 72rem !important;
  height: 50px !important;
  margin: 0 auto 36px !important;
  border-radius: 2px;
  background: var(--color-accent);
  box-shadow: 0 2px 6px rgba(166, 82, 36, 0.25);
}

.v-row {
  gap: 32px;
}

.faq-card {
  border-radius: 10px !important;
  border: 1px solid #e0e0e0;
  box-shadow: none;
  background: #fafafa;
  transition: border-color 0.3s ease, box-shadow 0.3s ease;
}

.faq-card:hover {
  border-color: var(--color-accent);
  box-shadow: 0 8px 20px rgba(166, 82, 36, 0.12);
}

.question {
  background-color: transparent;
  font-size: 1.15rem;
  font-weight: 600;
  color: #035928;
  padding-left: 32px !important;
  padding-right: 32px !important;
  min-height: 56px;
  border-bottom: 1px solid #e0e0e0;
  user-select: none;
  transition: color 0.3s ease;
  font-family: 'Poppins', sans-serif;
}

.question:hover {
  color:#1CA63F;
}

.v-expansion-panel-header__icon .v-icon {
  color:#555555 !important;
  font-size: 1.3rem;
  transition: color 0.3s ease;
}

.v-expansion-panel-header--active .v-expansion-panel-header__icon .v-icon {
  color:#A65224 !important;
}

.answer {
  background: #fff;
  padding-left: 32px !important;
  padding-right: 32px !important;
  padding-bottom: 24px !important;
  font-size: 1rem;
  font-weight: 400;
  color: #555555 ;
  line-height: 1.6;
  border-left: 4px solid #A65224;
  user-select: text;
  font-family:'Poppins', sans-serif;
}

.answer-text {
  margin-bottom: 0;
}

.more-btn {
  font-weight: 600;
  color: #1CA63F;
  transition: color 0.3s ease;
  margin-top: 12px !important;
  text-transform: none;
  font-family: 'Poppins', sans-serif;
}

.more-btn:hover {
  color: #A65224;
  text-decoration: underline;
  transform: translateX(4px);
}

.cta-btn {
  background: #A65224;
  box-shadow: 0 6px 16px rgba(166, 82, 36, 0.3) !important;
  font-weight: 700;
  font-size: 1.2rem;
  padding-left: 40px !important;
  padding-right: 40px !important;
  border-radius: 24px !important;
  transition: background-color 0.3s ease, box-shadow 0.3s ease, transform 0.3s ease;
  text-transform: none;
  font-family: 'Poppins', sans-serif;
}

.cta-btn:hover {
  background: #1CA63F;
  box-shadow: 0 10px 26px rgba(28, 166, 63, 0.45) !important;
  transform: translateY(-3px);
}

@media (max-width: 960px) {
  .faq-section {
    padding: 40px 24px;
  }

  .section-title {
    font-size: 2rem;
  }
}

@media (max-width: 600px) {
  .faq-section {
    padding: 32px 16px;
  }

  .section-title {
    font-size: 1.6rem;
  }

  .question {
    font-size: 1rem;
    padding-left: 20px !important;
    padding-right: 20px !important;
  }

  .answer {
    font-size: 0.95rem;
  }
}

</style>
