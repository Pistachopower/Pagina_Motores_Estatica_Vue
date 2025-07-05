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

  //para el componente Catalogo.vue
  {
  path: '/productos/:categoria?',
  name: 'productos',
  component: Productos,
}

  ],
   scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth',
      }
    }
    return { top: 0 }
  }
})

export default router
