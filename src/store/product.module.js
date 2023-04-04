import axios from "axios";

export default {
  namespaced: true,
  state: {
    error: null,
    products: [],
    totalPages: 0,
  },
  mutations: {
    setProducts(state, data) {
      state.products = data;
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
        commit("setProducts", res.data.products);
        commit("setError", null);
        // commit("setLoading", false);
      } catch (error) {
        commit("setError", error);
      }
    },
  },
  getters: {
    getProducts: (state) => state.products,
    getError: (state) => state.error,
    // isLoading: (state) => state.loading,
  },
};
