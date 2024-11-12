import { createApp } from 'vue';
import App from './App.vue';
import VueLazyload from 'vue-lazyload';
import router from './router';

const app = createApp(App);

app.use(VueLazyload, {
  preLoad: 1.3,
  attempt: 1,
});

app.use(router); 

app.mount('#app'); 
