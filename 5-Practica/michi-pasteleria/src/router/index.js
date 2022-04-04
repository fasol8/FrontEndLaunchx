import { createRouter, createWebHashHistory } from 'vue-router'
import PastelesView from '../views/PastelesView.vue'
import PedidoView from '../views/PedidoView.vue'
import PasteleroView from '../views/PasteleroView.vue'

const routes = [
  {
    path: '/',
    name: 'pasteles',
    component: PastelesView
  },
  {
    path: '/pedido',
    name: 'pedido',
    component: PedidoView
  },
  {
    path: '/pastelero',
    name: 'pastelero',
    component: PasteleroView
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
