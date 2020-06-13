import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../Home.vue'

Vue.use(VueRouter)

export const componentRoutes = [
  {
    path: '/button',
    name: 'button',
    component: () => import('../components/button.vue')
  },
  {
    path: '/badge',
    name: 'badge',
    component: () => import('../components/badge.vue')
  },
  {
    path: '/tabs',
    name: 'tabs',
    component: () => import('../components/tabs.vue')
  }
]

export default new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Home,
      children: componentRoutes
    }
  ]
})
