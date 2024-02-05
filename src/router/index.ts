import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'anime',
      component: () => import('../views/AnimeView.vue')
    },
  ]
})

export default router
