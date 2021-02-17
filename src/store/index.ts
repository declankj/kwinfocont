import Vue from 'vue'
import Vuex from 'vuex'
import state from './state/index'

Vue.use(Vuex)

export default new Vuex.Store({
  state,
  mutations: {
    chageMenu (state, index) {
      state.menuIndex = index
    }
  },
  actions: {
    chageMenu ({ commit }, { index }) {
      commit('chageMenu', { index })
    }
  },
  modules: {
  }
})
