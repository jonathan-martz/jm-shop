import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue'
import ProductView from '@/views/Product/View.vue'
import Impressum from '@/views/Impressum.vue'
import CheckoutCart from '@/views/Checkout/Cart.vue'
import CheckoutPayment from '@/views/Checkout/Payment.vue'
import CheckoutShipping from '@/views/Checkout/Shipping.vue'
import CheckoutReview from '@/views/Checkout/Review.vue'
import UserLogin from '@/views/User/Login.vue'
import UserDebug from '@/views/User/Debug.vue'

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
  },
  {
    path: '/checkout/cart',
    name: 'CheckoutCart',
    component: CheckoutCart
  },
  {
    path: '/checkout/payment',
    name: 'CheckoutPayment',
    component: CheckoutPayment
  },
  {
    path: '/checkout/shipping',
    name: 'CheckoutShipping',
    component: CheckoutShipping
  },
  {
    path: '/checkout/review',
    name: 'CheckoutReview',
    component: CheckoutReview
  },
  {
    path: '/user/login',
    name: 'UserLogin',
    component: UserLogin
  },
  {
    path: '/user/debug',
    name: 'UserDebug',
    component: UserDebug
  }
]

const router = new VueRouter({
  routes
})

export default router
