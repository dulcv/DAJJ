<template>
  <div>
    <v-app-bar flat class="gradient-navbar" app height="96px">
      <v-app-bar-nav-icon class="d-md-none" @click="drawer = !drawer" />

      <!-- LOGO -->
      <v-toolbar-title class="d-flex align-center" style="height: 100%">
        <v-img
          src="/cima-logo.jpg"
          contain
          height="40"
          width="40"
          class="mr-2"
        />
        <span class="logo">CIMA A. C.</span>
      </v-toolbar-title>

      <v-spacer class="d-none d-md-flex" />

      <!-- Navegación -->
      <div class="d-none d-md-flex">
        <nuxt-link
          v-for="item in navItems"
          :key="item.key"
          :to="item.link"
          class="custom-nav-link btn-nav"
          :class="{ 'active-link': $route.path.endsWith(item.link) }"
        >
          {{ $t(`nav.${item.key}`) }}
        </nuxt-link>
      </div>

      <!-- Botón Donar -->
      <v-btn
        color="#035928"
        class="ml-2 white--text rounded-pill btn-nav d-none d-md-inline-flex btn-primary"
        elevation="1"
        @click="donate"
      >
        {{ $t('nav.donar') }}
      </v-btn>

      <!-- Selector de idioma SÚPER SIMPLE -->
      <div class="language-selector ml-2">
        <v-btn
          small
          :color="currentLang === 'es' ? '#035928' : 'grey'"
          :outlined="currentLang !== 'es'"
          @click="changeLanguage('es')"
          class="mr-1"
        >
          ES
        </v-btn>
        <v-btn
          small
          :color="currentLang === 'en' ? '' : 'grey'"
          :outlined="currentLang !== 'en'"
          @click="changeLanguage('en')"
        >
          EN
        </v-btn>
      </div>

      <!-- Ícono decorativo -->
      <v-btn icon>
        <v-icon color="green darken-2">mdi-help-circle-outline</v-icon>
      </v-btn>
    </v-app-bar>

    <!-- Menú móvil -->
    <v-navigation-drawer v-model="drawer" app temporary class="d-md-none">
      <v-list>
        <!-- Enlaces -->
        <v-list-item v-for="item in navItems" :key="item.key" class="pa-0">
          <nuxt-link
            :to="item.link"
            class="custom-nav-link btn-nav px-4 py-2 d-inline-block w-100"
            :class="{ 'active-link': $route.path === item.link }"
            @click.native="drawer = false"
          >
            {{ $t(`nav.${item.key}`) }}
          </nuxt-link>
        </v-list-item>

        <v-divider class="my-2" />

        <!-- Botón Donar -->
        <v-list-item>
          <v-btn block color="#035928" class="white--text" @click="donate">
            {{ $t('nav.donar') }}
          </v-btn>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      drawer: false,
      showDebug: false,
      currentLang: 'es',
      navItems: [
        { key: "inicio", link: "/" },
        { key: "nosotros", link: "/nosotros" },
        { key: "iniciativas", link: "/iniciativas" },
        { key: "recursos", link: "/recursos" },
        { key: "transparencia", link: "/transparencia" },
      ],
    };
  },

  methods: {
    changeLanguage(locale) {
      console.log(`🔄 Cambiando idioma a: ${locale}`)

      // 1. Cambiar idioma en i18n
      this.$i18n.setLocale(locale)

      // 2. Guardar en localStorage y variable global
      if (process.client) {
        localStorage.setItem('cima-locale', locale)
        window.CIMA_LANGUAGE = locale
      }

      // 3. Usar la función global si existe
      if (this.$language) {
        this.$language.set(locale)
      }

      // 4. Navegar a la ruta correcta según el idioma
      const currentRoute = this.$route.path
      let newPath = currentRoute

      if (locale === 'es') {
        // Para español, remover el prefijo /en si existe
        newPath = currentRoute.replace('/en', '') || '/'
      } else if (locale === 'en') {
        // Para inglés, agregar el prefijo /en si no existe
        if (!currentRoute.startsWith('/en')) {
          newPath = currentRoute === '/' ? '/en' : `/en${currentRoute}`
        }
      }

      // 5. Navegar solo si la ruta cambió
      if (newPath !== currentRoute) {
        this.$router.push(newPath)
      }

      // 6. Actualizar variables locales
      this.currentLang = locale

      // 7. Cerrar drawer
      this.drawer = false

      console.log(`✅ Idioma cambiado: ${locale}, Ruta: ${newPath}`)
    },

    donate() {
      this.$router.push("/donaciones");
    }
  },

  mounted() {
    // Aplicar idioma guardado
    if (this.$language) {
      this.$language.apply()
      this.currentLang = this.$language.get()
    }

    console.log('🌐 Navbar montado:', {
      i18n: this.$i18n.locale,
    })
  },

  // Actualizar cuando cambie la ruta
  watch: {
    '$route'() {
      this.$nextTick(() => {
        if (this.$language) {
          this.$language.apply()
          this.currentLang = this.$language.get()
        }
      })
    }
  }
};
</script>

<style scoped>
* {
  font-weight: bold;
}

.gradient-navbar {
  background: linear-gradient(
    to bottom,
    rgba(111, 156, 166, 0.45) 0%,
    rgba(245, 245, 245, 0.18) 81%
  );
  backdrop-filter: blur(5px);
}

.logo {
  color: #035928;
  font-size: 2rem;
}


.custom-nav-link {
  position: relative;
  text-decoration: none;
  color: #035928;
  font-weight: bold;
  margin: 0 0.5rem;
  padding: 0.5rem 1rem;
  transition: all 0.2s ease;
}

.custom-nav-link::after {
  content: '';
  position: absolute;
  bottom: 0.2rem;
  left: 0;
  width: 0%;
  height: 3px;
  background-color: #A65224;
  transition: width 0.3s ease;
}

.custom-nav-link:hover::after {
  width: 100%;
}

.custom-nav-link.active-link::after {
  width: 100%;
}

.btn-primary {
  transition: all 0.3s ease;
}
.language-selector .v-btn {
  color: white !important;
  border-color:#035928!important;
}

/* Botón activo  */
.language-selector .v-btn:not(.v-btn--outlined) {
  background-color: #035928 !important;
  color: white !important;
  border-color: #ffffff !important;
}

/* Botón inactivo*/
.language-selector .v-btn.v-btn--outlined {
  background-color: transparent !important;
  color: #035928 !important;
  border-color: #035928 !important;
}

/* Hover */
.language-selector .v-btn:hover {
  background-color:#035928!important;
  color: white !important;
  border-color:#035928 !important;
}

</style>
