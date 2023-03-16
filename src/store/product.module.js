import axios from "axios";

export default {
  namespaced: true,
  state: {
    // url: `https://dummyjson.com/products?limit=0&skip=0`,
    // loading: false,
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
    // setLoading(state, loading) {
    //   state.loading = loading;
    // },
  },
  actions: {
    async fetchProducts({ commit }, info) {
      // commit("setLoading", true);
      try {
        const res = await axios.get(info.url);
        commit("setData", res.data.products);
        commit("setError", null);
        // commit("setLoading", false);
        console.log("Fetched product:", this.state.products.data);
      } catch (error) {
        // console.log(error);
        // commit("setLoading", false);
        // commit("setData", null);
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
