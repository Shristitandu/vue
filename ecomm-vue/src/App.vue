<template>
  <div id="app">
    <AppNavbar />
      <router-view />
      <AppFooter />
    </div>
</template>

<script>

import { RouterView } from 'vue-router';
import AppNavbar from './pages/AppNavbar.vue';
import AppFooter from './pages/AppFooter.vue';


export default {
  name: 'App',
  components: {
    AppNavbar,
    RouterView,
    AppFooter
  },
  data() {
    return {
     
    }
  },
}
</script>