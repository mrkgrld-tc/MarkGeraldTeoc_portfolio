import { createRouter, createWebHistory } from 'vue-router'
const home = () => import('../views/home.vue')
const about = () => import('../views/about.vue')
const contact = () => import('../views/contact.vue')
const projects = () => import('../views/projects.vue')

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: home,
    },
    {
      path: '/about',
      name: 'about',
      component: about,
    },
    {
      path: '/contact',
      name: 'contact',
      component: contact
    },
    {
      path: '/projects',
      name: 'projects',
      component: projects
    }
  ],
})

export default router
