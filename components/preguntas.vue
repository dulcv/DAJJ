<template>
  <v-container class="faq-section py-8" style="max-width: 1000px;">
    <!-- Encabezado con decoración -->
    <div class="text-center mb-8">
      <h1 class="section-title">  {{ $t('cPreguntas.titulo') }} <span>{{ $t('cPreguntas.titulo2') }}</span></h1>
      <v-divider
        color="#A65224"
        :thickness="2"
        class="divider mx-auto my-4"
        width="80px"
      ></v-divider>
      <p class="section-subtitle">
        {{ $t('cPreguntas.descripcion') }}
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
              <span class="question-text">{{ $t(item.pregunta) }}</span>
            </v-expansion-panel-header>
            <v-expansion-panel-content class="answer px-6 pb-4">
              <p class="answer-text">{{ $t(item.respuesta) }}</p>
              <v-btn
                v-if="item.link"
                color="#1CA63F"
                text
                small
                :href="item.link"
                class="mt-2 more-btn"
              >
                  {{ $t('cPreguntas.masInformacion') }}
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
              <span class="question-text">{{ $t(item.pregunta) }}</span>
            </v-expansion-panel-header>
            <v-expansion-panel-content class="answer px-6 pb-4">
              <p class="answer-text">{{ $t(item.respuesta) }}</p>
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
    pregunta: 'cPreguntas.faqs.ubicacion.pregunta',
    respuesta: 'cPreguntas.faqs.ubicacion.respuesta',
    link: '/ubicacion'
  },
  {
    pregunta: 'cPreguntas.faqs.rescate.pregunta',
    respuesta: 'cPreguntas.faqs.rescate.respuesta'
  },
  {
    pregunta: 'cPreguntas.faqs.adopcion.pregunta',
    respuesta: 'cPreguntas.faqs.adopcion.respuesta',
    link: '/adopcion'
  },
  {
    pregunta: 'cPreguntas.faqs.entregar.pregunta',
    respuesta: 'cPreguntas.faqs.entregar.respuesta'
  },
  {
    pregunta: 'cPreguntas.faqs.veterinario.pregunta',
    respuesta: 'cPreguntas.faqs.veterinario.respuesta'
  },
  {
    pregunta: 'cPreguntas.faqs.maltrato.pregunta',
    respuesta: 'cPreguntas.faqs.maltrato.respuesta',
    link: '/denuncias'
  },
  {
    pregunta: 'cPreguntas.faqs.donativos.pregunta',
    respuesta: 'cPreguntas.faqs.donativos.respuesta',
    link: '/donaciones'
  }
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

<style>
:root {
  --color-neutral: #6F9CA6;   /* Azul verdoso */
  --color-primary: #035928;   /* Verde oscuro */
  --color-secondary: #1CA63F; /* Verde vibrante */
  --color-light: #F2E0BD;     /* Beige claro */
  --color-accent: #A65224;    /* Terracota */
  --font-family: 'Poppins', 'Helvetica Neue', Helvetica, Arial, sans-serif;
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
  font-size: 2.4rem;
  font-weight: 700;
  color: var(--color-primary);
  text-align: center;
  margin-bottom: 8px;
  letter-spacing: 0.04em;
  font-family: var(--font-family);
}

.section-title span {
  color: var(--color-secondary);
}

.section-subtitle {
  color: var(--color-neutral);
  font-size: 1.1rem;
  max-width: 600px;
  margin: 0 auto 36px;
  text-align: center;
  font-weight: 400;
  line-height: 1.5;
  font-family: var(--font-family);
}

.divider {
  width: 72px !important;
  height: 3px !important;
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
  color: var(--color-primary);
  padding-left: 32px !important;
  padding-right: 32px !important;
  min-height: 56px;
  border-bottom: 1px solid #e0e0e0;
  user-select: none;
  transition: color 0.3s ease;
  font-family: var(--font-family);
}

.question:hover {
  color: var(--color-secondary);
}

.v-expansion-panel-header__icon .v-icon {
  color: var(--color-neutral) !important;
  font-size: 1.3rem;
  transition: color 0.3s ease;
}

.v-expansion-panel-header--active .v-expansion-panel-header__icon .v-icon {
  color: var(--color-accent) !important;
}

.answer {
  background: #fff;
  padding-left: 32px !important;
  padding-right: 32px !important;
  padding-bottom: 24px !important;
  font-size: 1rem;
  font-weight: 400;
  color: #444;
  line-height: 1.6;
  border-left: 4px solid var(--color-accent);
  user-select: text;
  font-family: var(--font-family);
}

.answer-text {
  margin-bottom: 0;
}

.more-btn {
  font-weight: 600;
  color: var(--color-secondary);
  transition: color 0.3s ease;
  margin-top: 12px !important;
  text-transform: none;
  font-family: var(--font-family);
}

.more-btn:hover {
  color: var(--color-accent);
  text-decoration: underline;
  transform: translateX(4px);
}

.cta-btn {
  background: var(--color-accent);
  box-shadow: 0 6px 16px rgba(166, 82, 36, 0.3) !important;
  font-weight: 700;
  font-size: 1.2rem;
  padding-left: 40px !important;
  padding-right: 40px !important;
  border-radius: 24px !important;
  transition: background-color 0.3s ease, box-shadow 0.3s ease, transform 0.3s ease;
  text-transform: none;
  font-family: var(--font-family);
}

.cta-btn:hover {
  background: var(--color-secondary);
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
