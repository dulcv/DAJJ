<template>
  <div>
    <v-app-bar flat class="gradient-navbar" app height="96px">
      <v-app-bar-nav-icon
        class="d-md-none"
        @click="drawer = !drawer"
      />

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
        <v-btn
          v-for="item in navItems"
          :key="item.text"
          :to="item.link"
          text
          class="text-capitalize font-weight-bold btn-nav"
          :class="{ 'active-link': currentRoute === item.link }"
        >
          {{ item.text }}
        </v-btn>
      </div>

      <!-- Botón Donar -->
      <v-btn
        color="#035928"
        class="ml-2 white--text rounded-pill btn-nav d-none d-md-inline-flex"
        elevation="1"
      >
        Donar
      </v-btn>

      <!-- Menú de idioma -->
      <v-menu offset-y>
        <template v-slot:activator="{ on, attrs }">
          <v-btn icon v-bind="attrs" v-on="on">
            <v-icon>mdi-translate</v-icon>
          </v-btn>
        </template>
        <v-list>
          <v-list-item @click="changeLanguage('es')">
            <v-list-item-avatar>
              <v-img src="/flags/mexico.png" />
            </v-list-item-avatar>
            <v-list-item-title>Español</v-list-item-title>
          </v-list-item>

          <v-list-item @click="changeLanguage('en')">
            <v-list-item-avatar>
              <v-img src="/flags/estados-unidos.png" />
            </v-list-item-avatar>
            <v-list-item-title>English</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>

      <!-- Ícono decorativo -->
      <v-btn icon>
        <v-icon color="green darken-2">mdi-help-circle-outline</v-icon>
      </v-btn>
    </v-app-bar>

    <!-- Menú móvil -->
    <v-navigation-drawer
      v-model="drawer"
      app
      temporary
      class="d-md-none"
    >
      <v-list>
        <v-list-item
          v-for="item in navItems"
          :key="item.text"
          :to="item.link"
          @click="drawer = false"
          link
        >
          <v-list-item-title>{{ item.text }}</v-list-item-title>
        </v-list-item>

        <v-divider class="my-2" />

        <v-list-item>
          <v-btn block color="#035928" class="white--text" @click="donate">
            Donar
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
      navItems: [
        { text: 'Inicio', link: '/' },
        { text: 'Nosotros', link: '/nosotros' },
        { text: 'Iniciativas', link: '/iniciativas' },
        { text: 'Recursos', link: '/recursos' },
        { text: 'Transparencia', link: '/transparencia' }
      ]
    }
  },
  computed: {
    currentRoute() {
      return this.$route.path
    }
  },
  methods: {
    changeLanguage(lang) {
      // Aquí puedes usar i18n o lo que prefieras
      console.log(`Idioma cambiado a ${lang}`)
    },
    donate() {
      // Acción al hacer clic en "Donar"
      console.log('Ir a página de donaciones')
      this.$router.push('/donar') // ajusta según tu ruta real
    }
  }
}
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

.btn-nav {
  margin: 0.3rem;
}

.btn-nav::after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0%;
  height: 2px;
  background-color:#A65224;
  transition: width 0.3s;
}

.btn-nav:hover::after{
  width: 100%;
}
</style>
