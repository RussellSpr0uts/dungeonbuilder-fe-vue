import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    companyName: '',
    notification: false,
  },
  mutations: {
    ADD_COMPANY_NAME(state, payload) {
      state.companyName = payload;
    },
    TOGGLE_NOTIFICATION(state, payload) {
      state.notification = payload;
    },
  },
  actions: {
    addCompanyName({ commit }, { vm, payload }) {
      commit('ADD_COMPANY_NAME', payload);
    },
  },
});
