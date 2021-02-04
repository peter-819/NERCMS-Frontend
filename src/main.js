// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import VueI18n from 'vue-i18n'
import 'es6-promise/auto'

import store from './store'
import VueResource  from 'vue-resource';

Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(VueI18n)
Vue.use(VueResource)

const i18n = new VueI18n({
  locale:'cn',
  messages:{
    'cn': require('./lang/cn'),
    'en': require('./lang/en')
  }
})
export default i18n

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  i18n:i18n,
  components: { App },
  template: '<App/>'
})
