import { createRouter, createWebHistory } from '@ionic/vue-router'
import { RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/home',
  },
  {
    path: '/home',
    name: 'Home',
    component: () => import('../views/HomePage.vue')
  },
  {
    path: '/usa',
    name: 'USA',
    component: () => import('../views/USA.vue')
  },
  {
    path: '/russia',
    name: 'Russia',
    component: () => import('../views/Russia.vue')
  },
  {
    path: '/europe',
    name: 'Europe',
    component: () => import('../views/Europe.vue')
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
