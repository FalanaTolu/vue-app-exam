export default {
  namespaced: true,
  state: {
    authenticated: false,
    loggedIn: false,
    loading: false,
    user: "",
  },
  mutations: {
    setAuth(state, authenticated) {
      state.authenticated = authenticated;
    },
    authUser(state, payload) {
      state.user = payload;
    },
    setLoggedIn(state, loggedIn) {
      state.loggedIn = loggedIn;
    },
    setLoading(state, loading) {
      state.loading = loading;
    },
  },
  actions: {
    // login({ commit }, data) {
    //   commit("auth")
    //   commit("authUser", data.user)
    //   commit("loggedIn")
    //   localStorage.setItem("user", data.user)
    //   console.log(data);
    //   console.log('User:', this.state.user);
    //   console.log('AuthState:', this.state.isAuthenticated);
    //   console.log('Logged on:', this.state.isLoggedIn);
    // },
    logout({ commit }) {
      // localStorage.removeItem('user')
      commit("setLoggedIn", false);
      commit("authUser", "");
      commit("setAuth", false);
      sessionStorage.clear();
      // sessionStorage.removeItem('vuex')
    },
    async register({ commit }, data) {
      const timeout = 2000;
      commit("setLoading", true);

      try {
        // Simulate a server request
        await new Promise((resolve) => {
          setTimeout(() => {
            resolve();
          }, timeout);
        });

        // Handle successful login
        // commit("register");
        commit("setLoading", false);
        commit("setAuth", true);
        commit("authUser", data.user);
        commit("setLoggedIn", true);
        // console.log(data);
        // localStorage.setItem("user", data.user)
        // this.state.user = data.user;
        console.log(`Logged in as ${this.state.auth.user}`);
        console.log("Loading:", this.state.auth.loading);
        console.log("AuthState:", this.state.auth.authenticated);
        console.log("Logged on:", this.state.auth.loggedIn);
      } catch (error) {
        // Handle login error
        console.error(`Error logging in: ${error.message}`);
      }
    },
    async asyncLogin({ commit }, data) {
      // Simulate a delay of 2 seconds
      const timeout = 2000;
      commit("setLoading", true);

      try {
        // Simulate a server request
        await new Promise((resolve) => {
          setTimeout(() => {
            resolve();
          }, timeout);
        });

        // Handle successful login
        commit("setLoading", false);
        commit("setAuth", true);
        commit("authUser", data.user);
        commit("setLoggedIn", true);
        console.log(`Logged in as ${this.state.auth.user}`);
        console.log("Loading:", this.state.auth.loading);
        console.log("AuthState:", this.state.auth.authenticated);
        console.log("Logged on:", this.state.auth.loggedIn);
        // console.log(this.getters['auth/isLoading'])
      } catch (error) {
        // Handle login error
        console.error(`Error logging in: ${error.message}`);
      }
    },
    //   asyncLogin({ commit }) {
    //   setTimeout(() => {
    //     commit("auth");
    //   }, 1000)
    //   localStorage.setItem("user", this.state.user)
    // },
    // asyncLogout({ commit }) {
    //   setTimeout(() => {
    //     commit("unAuth");
    //   }, 1000);
    //   localStorage.removeItem("user");
    // },
  },
  getters: {
    isLoading: (state) => state.loading,
    isLoggedIn: (state) => state.loggedIn,
    isAuthenticated: (state) => state.authenticated,
    // isAuthenticated: (state) => state.isAuthenticated,
    // isLoggedIn: (state) => state.isLoggedIn,
    // user: (state) => state.user,
    // isLoggedIn(state) {
    // if (state.user) return state.isLoggedIn = true
    //   return (state.isLoggedIn = state.user ? true : false);
    // },
  },
};
