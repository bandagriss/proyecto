import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'main',
      component: () => import('@/layouts/MainBase.vue'),
      children: [
        {
          path: '/inicio',
          name: 'inicio',
          component: () => import('@/views/inicio/InicioView.vue')
        },
        {
          path: '/usuarios',
          name: 'usuarios',
          component: () => import('@/views/inicio/UsuariosView.vue')
        },
        {
          path: '/productos',
          name: 'productos',
          component: () => import('@/views/inicio/ProductosView.vue')
        },
        {
          path: '/campanias',
          name: 'campanias',
          component: () => import('@/views/inicio/CampaniasView.vue')
        },
        {
          path: '/reportes',
          name: 'reportes',
          component: () => import('@/views/inicio/ReportesView.vue')
        },
        {
          path: '/configuraciones',
          name: 'configuraciones',
          component: () => import('@/views/inicio/ConfiguracionesView.vue')
        }
      ]
    }
  ]
})

export default router
