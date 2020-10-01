import Vue from 'vue';
import App from './App.vue';
import store from './store/index';
import router from './router';
import babelPolyfill from 'babel-polyfill'

new Vue({
  store,
  router,
  render: h => h(App),

}).$mount('#app');
