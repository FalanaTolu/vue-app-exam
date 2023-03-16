import { createStore } from "vuex";
import createPersistedState from "vuex-persistedstate";
import authModule from "./auth.module";
import productModule from "./product.module";

export default createStore({
  plugins: [
    createPersistedState({
      storage: window.sessionStorage,
    }),
  ],
 modules: {
  auth: authModule,
  products: productModule,
 },
});
