import Vue from 'vue';
import VueInputMask from 'vue-inputmask';
import App from './App.vue';
import router from './router';
import store from './store';

Vue.config.productionTip = false;
Vue.use(VueInputMask.default);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
