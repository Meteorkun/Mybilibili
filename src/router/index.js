import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home'
import Login from '@/views/Login.vue'
import register from '@/views/register.vue'
import userinfo from '@/views/userinfo.vue'
import edit from '@/views/Edit.vue'
import cover from '@/views/cover.vue'
import article from '@/views/Article.vue';



Vue.use(Router)

const routes = [
    {
      path: '/',
      component: Home,
      meta:{
        keepalive:true
      }
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
    },
    {
      path: '/edit',
      component: edit
    },
    {
      path: '/article/:id',
      component: article
    }
  ]

const router = new Router({
  routes,
  mode:'history'
})

export default router

