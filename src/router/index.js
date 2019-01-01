import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/login'
import Phone from '@/components/phone'
import Home from '@/container/home'
import Record from '@/container/record'
import Radio from '@/container/radio'
import Video from '@/container/video'
import Mine from '@/container/mine'
import Friend from '@/container/firend'
import Account from '@/container/account'
import Find from '@/container/find'
import Member from '@/container/member'

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
      redirect: '/home/find',
      children: [
        {
          path: '/home/video',
          name: 'Video',
          component: Video,
        }, {
          path: '/home/mine',
          name: 'Mine',
          component: Mine,
        }, {
          path: '/home/friend',
          name: 'Friend',
          component: Friend,
        }, {
          path: '/home/account',
          name: 'Account',
          component: Account,
        }, {
          path: '/home/find',
          name: 'Find',
          component: Find,
          redirect: '/home/find/radio',
          children: [
            {
              path: '/home/find/record',
              name: 'Record',
              component: Record,
            },
            {
              path: '/home/find/radio',
              name: 'Radio',
              component: Radio,
            }
          ]
        }
      ]
    },{
      path: '/member',
      name: 'Member',
      component: Member,
    }
  ]
})


