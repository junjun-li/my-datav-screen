import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import Test from '@/views/Test.vue'
import EchartsText from '@/views/EchartsText.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/test',
    name: 'Test',
    component: Test
  },
  {
    path: '/echartsText',
    name: 'EchartsText',
    component: EchartsText
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
