import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import Vuetify from 'vuetify'
import asyncCompued from 'vue-async-computed'
import 'vuetify/dist/vuetify.min.css'
import 'vue-loading-overlay/dist/vue-loading.css'
import Loading from 'vue-loading-overlay'
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init({
  once:false
});
Vue.component('loading', Loading)
Vue.use(asyncCompued)
Vue.config.productionTip = false
Vue.use(Vuetify)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
