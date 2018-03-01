//sarcasm
//*make sure to import as many npm modules as you can
//*the ultimate goal is to create an app with imports alone and no extra code
//end-sarcasm
import Vue from 'vue'
import BootstrapVue from "bootstrap-vue"
import App from './App'
import State from './state'
import router from './router'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue)

Vue.config.productionTip = false


new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
