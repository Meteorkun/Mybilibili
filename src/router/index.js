import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home'
import Login from '@/views/Login.vue'
import register from '@/views/register.vue'

Vue.use(Router)

const routes = [
    {
      path: '/login',
      component: Login
    },
    {
      path: '/register',
      component: register
    },
    {
      path: '/',
      component: Home
    }
  ]

const router = new Router({
  routes,
  mode:'history'
})

export default router

