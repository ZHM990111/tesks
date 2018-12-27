import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/login'
import Phone from '@/components/phone'
import Home from '@/container/home'
import Record from '@/container/record'
import Radio from '@/container/radio'

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
    },
    {
      path: '/home',
      name: 'Home',
      component: Home,
      redirect:'/home/record',
      children: [
        {
          path: '/home/record',
          name: 'Record',
          component: Record,
        },
        {
          path: '/home/radio',
          name: 'Radio',
          component: Radio,
        }
      ]
    }
  ]
})
