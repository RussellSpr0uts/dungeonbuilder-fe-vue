import Vue from 'vue';
import App from '@/App.vue';
import router from '@/router';
import store from '@/store/index';
import '@/registerServiceWorker';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  mounted() {
    const bodyEl: any = document.querySelector('body');
    bodyEl.classList.add('dev');
  },
  render: (h) => h(App),
}).$mount('#app');
