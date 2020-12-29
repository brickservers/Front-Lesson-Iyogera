import Vue from 'vue'
import App from './App.vue'
//import Login from "./Login";
//import axios from 'axios';
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'
import '@/assets/main.css'
import 'bootstrap/dist/css/bootstrap.min.css'

import router from './router'
Vue.use(Buefy)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')



