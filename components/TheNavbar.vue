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
        :key="item.text"
        :to="item.link"
        class="custom-nav-link btn-nav"
        :class="{ 'active-link': $route.path === item.link }"
      >
        {{ item.text }}
      </nuxt-link>
       </div>

      <!-- Botón Donar -->
      <v-btn
        color="#035928"
        class="ml-2 white--text rounded-pill btn-nav d-none d-md-inline-flex btn-primary"
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
<v-navigation-drawer v-model="drawer" app temporary class="d-md-none">
  <v-list>
    <!-- Enlaces con subrayado y activo -->
    <v-list-item v-for="item in navItems" :key="item.text" class="pa-0">
      <nuxt-link
        :to="item.link"
        class="custom-nav-link btn-nav px-4 py-2 d-inline-block w-100"
        :class="{ 'active-link': $route.path === item.link }"
        @click.native="drawer = false"
      >
        {{ item.text }}
      </nuxt-link>
    </v-list-item>

    <v-divider class="my-2" />

    <!-- Botón Donar -->
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
        { text: "Inicio", link: "/" },
        { text: "Nosotros", link: "/nosotros" },
        { text: "Iniciativas", link: "/iniciativas" },
        { text: "Recursos", link: "/recursos" },
        { text: "Transparencia", link: "/transparencia" },
      ],
    };
  },
  computed: {
    currentRoute() {
      return this.$route.path;
    },
  },
  methods: {
    changeLanguage(lang) {
      // Aquí puedes usar i18n o lo que prefieras
      console.log(`Idioma cambiado a ${lang}`);
    },
    donate() {
      // Acción al hacer clic en "Donar"
      console.log("Ir a página de donaciones");
      this.$router.push("/donar"); // ajusta según tu ruta real
    },
  },
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
  transition: width 0.3s ease ;
}

.custom-nav-link:hover::after {
  width: 100%;
}


.custom-nav-link.active-link::after {
  width: 100%;
}
.btn-primary{
  transition: all 0.3s ease;

  }


</style>
