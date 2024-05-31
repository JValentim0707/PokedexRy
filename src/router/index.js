
/**
 * router/index.ts
 *
 * Automatic routes for `./src/pages/*.vue`
 */

import HomePage from '@/pages/HomePage.vue'

// Composables
import { createRouter, createWebHistory } from 'vue-router'

const routes = [ 
  {
    name: 'HomePage',
    path: '/',
    component: HomePage
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
