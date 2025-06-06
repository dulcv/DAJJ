<template>
  <v-app-bar flat class="gradient-navbar">
    <!--LOGO-->
    <v-toolbar-title class="d-flex align-center">
      <v-img src="/cima-logo.jpj" contain height="40" width="40" class="mr-2" />
      <span class="logo">CIMA A. C.</span>
    </v-toolbar-title>
    <v-spacer />
      <!-- Navegación -->
    <v-btn
      v-for="item in navItems"
      :key="item.text"
      :to="item.link"
      text
      class="text-capitalize font-weight-bold btn-nav"
      :class="{ 'active-link': $route.path === item.link }"
    >
      {{ item.text }}
    </v-btn>

    <!--Boton Donar-->
    <v-btn
      color="#035928"
      class="ml-4 white--text rounded-pill btn-nav"
      elevation="1"
      >Donar</v-btn
    >
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

    <!--Login-->
    <!-- Micrófono / Decoración -->
    <v-btn icon>
      <v-icon color="green darken-2">mdi-help-circle-outline</v-icon>
    </v-btn>
  </v-app-bar>
</template>

<script>

export default {
  data () {
    return {
      navItems: [
        { text: 'Inicio', link: '/' },
        { text: 'Nosotros', link: '/nosotros' },
        { text: 'iniciativas', link: '/iniciativas' },
        { text: 'Recursos', link: '/recursos' },
        { text: 'Transparencia', link: '/transparencia' }
      ]
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
  border-bottom: 1px solid #ccc;

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
