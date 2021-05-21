import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    userId: null,
    userName: null,
    userGroup: null,
  },
  getters: {
    getUserId: (state) => state.userId,
    getUserName: (state) => state.userName,
    getUserGroup: (state) => state.userGroup,
  },
  mutations: {
    setUserId: (state, val) => {
      state.userId = val;
    },
    setUserName: (state, val) => {
      state.userName = val;
    },
    setUserGroup: (state, val) => {
      state.userGroup = val;
    },
  },
  actions: {
    setUserId: ({ commit }, val) => {
      commit('setUserId', val);
    },
    setUserName: ({ commit }, val) => {
      commit('setUserName', val);
    },
    setUserGroup: ({ commit }, val) => {
      commit('setUserGroup', val);
    },
  },
  modules: {
  },
});
