/*
* @Author: k_denng
* @Date:   2017-08-29 12:04:37
* @Last Modified by:   k_denng
* @Last Modified time: 2017-08-29 14:07:32
*/
import Vue from 'vue'
import Router from 'vue-router'
import indexPage from '../pages/index.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: indexPage
    }
  ]
})
