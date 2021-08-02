import Vue from 'vue'
import Vuex from 'vuex'
import ModuleScreen from '@/store/screen.js'
import ModuleNav from '@/store/nav.js'
import ModuleCart from '@/store/cart.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    "screen": ModuleScreen,
    "cart": ModuleCart,
    "nav": ModuleNav
  }
})
