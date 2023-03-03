import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/admin',
    name: 'admin-',
    component: () => import('../views/AdminView.vue')
  },
  {
    path: '/login',
    name: 'login-',
    component: () => import('../views/LoginView.vue')
  },
  {
    path: '/product',
    name: 'product-',
    component: () => import('../views/ProductsView.vue')
  },
  {
    path: '/registration',
    name: 'registration-',
    component: () => import('../views/RegistrationView.vue')
  },
  {
    path: '/userprofile',
    name: 'userprofile-',
    component: () => import('../views/UserProfileView.vue')
  },
  {
    path: '/contact',
    name: 'con-tact',
    component: () => import('../views/ContactFormView.vue')
  },
  {
    path: '/single-product',
    name: 'single-product',
    component: () => import('../views/SingleProductView.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
