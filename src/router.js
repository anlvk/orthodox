import { createRouter, createWebHistory } from 'vue-router'
import HomeView from './views/HomeView.vue'
import AboutView from './views/AboutView.vue'
import ServicesView from './views/ServicesView.vue' // 1. Импортируем компонент контактов

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView
  },
  {
    path: '/services', // 2. Задаем URL-адрес страницы
    name: 'services',
    component: ServicesView
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
