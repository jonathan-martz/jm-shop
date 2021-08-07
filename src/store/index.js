import Vue from 'vue'
import Vuex from 'vuex'
import ModuleScreen from '@/store/screen.js'
import ModuleNav from '@/store/nav.js'
import ModuleCart from '@/store/cart.js'
import ModuleMessage from '@/store/messages.js'
import ModuleUser from '@/store/user.js'

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
    "messages": ModuleMessage,
    "user": ModuleUser,
    "nav": ModuleNav
  }
})
