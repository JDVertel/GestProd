import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Viewadmin from '../views/adminView.vue'
import Viewproveedores from '../views/g_proveedores.vue'
import Viewclientes from '../views/g_clientes.vue'
import Viewusuarios from '../views/g_usuarios.vue'
import Viewproductos from '../views/g_productos.vue'
import Viewmateriales from '../views/g_materiales.vue'
import Viewinformes from '../views/g_informes.vue'
import Viewproduccion from '../views/g_produccion.vue'
import Viewpedidos from '../views/g_pedidos.vue'
import Viewventas from '../views/g_ventas.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/admin',
      name: 'admin',
      component: Viewadmin
    },
    {
      path: '/proveedores',
      name: 'proveedores',
      component: Viewproveedores
    },
    {
      path: '/clientes',
      name: 'clientes',
      component: Viewclientes
    },
    {
      path: '/usuarios',
      name: 'usuarios',
      component: Viewusuarios
    },
    {
      path: '/productos',
      name: 'productos',
      component: Viewproductos
    },
    {
      path: '/materiales',
      name: 'materiales',
      component: Viewmateriales
    },
    {
      path: '/informes',
      name: 'informes',
      component: Viewinformes
    },
    {
      path: '/produccion',
      name: 'produccion',
      component: Viewproduccion
    },
    {
      path: '/pedidos',
      name: 'pedidos',
      component: Viewpedidos
    },
    {
      path: '/ventas',
      name: 'ventas',
      component: Viewventas
    },

  ]
})

export default router
