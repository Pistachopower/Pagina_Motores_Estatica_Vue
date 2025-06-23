import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Productos from '../views/Productos.vue'
import AboutView from '../views/AboutView.vue'
import DetalleProductoView from '@/views/DetalleProductoView.vue';


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/productos',
      name: 'productos',
      component: Productos,
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView,
    },

  {
    path: '/product/:tipo/:id',
    name: 'DetalleProductoView',
    component: DetalleProductoView,
  },

  ],
})

export default router
