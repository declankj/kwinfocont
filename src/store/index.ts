import Vue from 'vue'
import Vuex from 'vuex'
import state from './state/index'

Vue.use(Vuex)

export default new Vuex.Store({
  state,
  mutations: {
    changeMenu (state, { index, child }) {
      state.menuIndex.main = index === -1 ? state.menuIndex.main : index
      state.menuIndex.child = child
    }
  },
  actions: {
    changeMenu ({ commit }, { index, child }) {
      commit('changeMenu', { index, child })
    }
  },
  modules: {
  }
})
