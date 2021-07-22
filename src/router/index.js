import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue'
import ProductView from '@/views/ProductView.vue'
import Impressum from '@/views/Impressum.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/product/:sku',
    name: 'ProductView',
    component: ProductView
  },
  {
    path: '/impressum/',
    name: 'Impressum',
    component: Impressum
  }
]

const router = new VueRouter({
  routes
})

export default router
