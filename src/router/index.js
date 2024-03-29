import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue' // Aquí corregí la importación
import About from '../views/AboutView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/About',
      name: 'About',
      component: About
    }
  ]
})

export default router
