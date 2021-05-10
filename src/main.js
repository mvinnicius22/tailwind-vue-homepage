import Vue from 'vue'
import App from './App.vue'
import './assets/tailwind.css'
import router from './router'
import moment from 'moment'
import VueMoment from 'vue-moment'
require('moment/locale/pt-br')

Vue.config.productionTip = false
Vue.use(VueMoment, {
  moment
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
