// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
// import Vue from 'vue'
import App from './App'
import router from './router'
import Vue from 'vue';
import store from './vuex'
import axios from 'axios'
Vue.prototype.$http = axios
import 'lib-flexible/flexible.js'
import Mint from 'mint-ui';
Vue.use(Mint);


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})