import { createWebHistory, createRouter } from 'vue-router'
import index from '@/views/Index.vue'
import Actions from '@/views/Actions.vue'

const routes= [
  {
    path: '/',
    name: 'Home',
    component: index,
  },
  {
    path: '/create',
    name: 'Create',
    component: Actions,
  },
  {
    path: '/modify/:id',
    name: 'Modify',
    component: Actions,
  },
]

const router= createRouter({
  history: createWebHistory(),
  routes,
})

export default router
