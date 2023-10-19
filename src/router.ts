import { createRouter, createWebHistory } from 'vue-router'
import Home from "./views/Home.vue"
import Projeto from './views/Projeto.vue'

const routes = [
  { 
    path: '/', component: Home
  },
  {
    path: '/projeto/:id', component: Projeto
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
