import Vue from 'vue'
import Vuex from 'vuex'
import basic from './modules/basic'
import getters from './getter'
Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    basic
  },
  getters
})
