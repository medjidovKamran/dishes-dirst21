import { createRouter, createWebHistory } from 'vue-router'
import Dishes from '../views/Dishes.vue'
import Edit from '../views/Edit.vue'

const routes = [
  {
    path: '/',
    name: 'dishes',
    component: Dishes,
  },
  {
    path: '/create',
    name: 'create',
    component: () => import('../views/Create.vue'),
  },
  {
    path: '/edit/:_id',
    name: 'edit',
    component: () => import('../views/Edit.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
