/*
* @Author: k_denng
* @Date:   2017-08-29 12:04:37
* @Last Modified by:   k_denng
* @Last Modified time: 2017-08-29 14:05:55
*/
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import router from './router'
import layout from './components/layout.vue'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<layout/>',
  components: { layout }
})
