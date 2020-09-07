import 'whatwg-fetch'
import 'core-js/fn/array/flat-map'
import 'classlist-polyfill'

import Vue from 'vue'
import App from './App.vue'

import router from './config/router'

Vue.config.productionTip = true

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
