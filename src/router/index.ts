import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'about', component: () => import('@/views/ViewAbout.vue') },
    { path: '/skills', name: 'skills', component: () => import('@/views/ViewSkills.vue') },
    { path: '/projects', name: 'projects', component: () => import('@/views/ViewProjects.vue') },
    { path: '/contact', name: 'contact', component: () => import('@/views/ViewContact.vue') },
  ],
})

export default router