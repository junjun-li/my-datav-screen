import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import Text from '@/views/Text.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/text',
    name: 'Text',
    component: Text
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
