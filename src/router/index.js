import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home'
import Login from '@/views/Login.vue'
import register from '@/views/register.vue'
import userinfo from '@/views/userinfo.vue'

Vue.use(Router)

const routes = [
    {
      path: '/',
      component: Home
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/register',
      component: register
    },
    {
      path: '/userinfo',
      component: userinfo
    }
  ]

const router = new Router({
  routes,
  mode:'history'
})

export default router

