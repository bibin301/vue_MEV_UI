// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuetify from 'vuetify'
import iView from 'iview'
import App from './App'
import router from './router'
import 'vuetify/dist/vuetify.min.css'
import 'iview/dist/styles/iview.css'
import store from './store';

Vue.use(Vuetify)
Vue.use(iView)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})

