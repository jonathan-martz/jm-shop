import Vue from 'vue'
import Vuex from 'vuex'
import ModuleScreen from '@/store/screen.js'
import ModuleList from '@/store/list.js'

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
    "list": ModuleList
  }
})
