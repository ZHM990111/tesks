import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/login'
import Phone from  '@/components/phone'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/phone',
      name: 'Phone',
      component: Phone
    }
  ]
})
