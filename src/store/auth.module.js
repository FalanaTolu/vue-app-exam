export default {
  namespaced: true,
  state: {
    authenticated: false,
    loggedIn: false,
    loading: false,
    user: "Tolu",
    password: "12345",
  },
  mutations: {
    setAuth(state, authenticated) {
      state.authenticated = authenticated;
    },
    authUser(state, payload) {
      state.user = payload;
    },
    setPassword(state, payload) {
      state.password = payload;
    },
    setLoggedIn(state, loggedIn) {
      state.loggedIn = loggedIn;
    },
    setLoading(state, loading) {
      state.loading = loading;
    },
  },
  actions: {
    logout({ commit }) {
      commit("setLoggedIn", false);
      commit("authUser", "");
      commit("setAuth", false);
      // sessionStorage.clear();
    },
    async register({ commit }, data) {
      const timeout = 1000;
      commit("setLoading", true);

      try {
        // Simulate a server request
        await new Promise((resolve) => {
          setTimeout(() => {
            resolve();
          }, timeout);
        });

        commit("setLoading", false);
        commit("setAuth", true);
        commit("authUser", data.user);
        commit("setPassword", data.password);
        commit("setLoggedIn", true);
      } catch (error) {
        console.error(`Error logging in: ${error.message}`);
      }
    },
    async asyncLogin({ commit }, data) {
      // Simulate a delay
      const timeout = 1000;
      commit("setLoading", true);

      try {
        // Simulate a server request
        await new Promise((resolve) => {
          setTimeout(() => {
            resolve();
          }, timeout);
        });

        // console.log(`Logged Getter: ${this.getters?.auth?.isLoading}`)

        if (
          this.state.auth.user == data.user &&
          this.state.auth.password == data.password
        ) {
          commit("setLoading", false);
          commit("setAuth", true);
          commit("authUser", data.user);
          commit("setLoggedIn", true);
        } else {
          commit("setLoading", false);
          alert("User not verified or password incorrect");
        }
      } catch (error) {
        console.error(`Error logging in: ${error.message}`);
      }
    },
  },
  getters: {
    isLoading: (state) => state.loading,
    isLoggedIn: (state) => state.auth.loggedIn,
    isAuthenticated: (state) => state.authenticated,
  },
};
