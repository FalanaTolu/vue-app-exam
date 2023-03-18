import axios from "axios";

export default {
  namespaced: true,
  state: {
    error: null,
    data: null,
    totalPages: 0,
  },
  mutations: {
    setData(state, data) {
      state.data = data;
    },
    setError(state, error) {
      state.error = error;
    },
  },
  actions: {
    async fetchProducts({ commit }, info) {
      // commit("setLoading", true);
      try {
        const res = await axios.get(info.url);
        commit("setData", res.data.products);
        commit("setError", null);
        // commit("setLoading", false);
      } catch (error) {
        commit("setError", error);
      }
    },
  },
  getters: {
    getData: (state) => state.data,
    getError: (state) => state.error,
    // isLoading: (state) => state.loading,
  },
};
