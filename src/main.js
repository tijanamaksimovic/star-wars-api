import Vue from 'vue';
import Vuetify from 'vuetify';
import App from './App.vue';
import store from './store';

// index.js or main.js
import 'vuetify/dist/vuetify.min.css'; // Ensure you are using css-loader

Vue.use(Vuetify);

Vue.config.productionTip = false;

new Vue({
  store,
  render: h => h(App),
}).$mount('#app');
