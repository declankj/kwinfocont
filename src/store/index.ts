import Vue from 'vue'
import Vuex from 'vuex'
import state from './state/index'

Vue.use(Vuex)

export default new Vuex.Store({
  state,
  mutations: {
    chageMenu (state, { index, child }) {
      state.menuIndex.main = index
      state.menuIndex.child = child
    }
  },
  actions: {
    chageMenu ({ commit }, { index, child }) {
      commit('chageMenu', { index, child })
    }
  },
  modules: {
  }
})
