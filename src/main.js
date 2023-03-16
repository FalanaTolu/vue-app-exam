import { createApp } from "vue";
import App from "./App.vue";
import { createRouter, createWebHistory } from "vue-router";
import Home from "./views/HomePage.vue";
import About from "./views/AboutPage.vue";
import Login from "./views/LoginPage.vue";
import SignUp from "./views/SignUpPage.vue";
import Products from "./views/ProductsPage.vue";
import Product from "./views/SingleProductPage.vue";
import NotFound from "./views/NotFound.vue";
import store from "./store/index";

const app = createApp(App);

const routes = [
  {
    path: "/login",
    name: Login,
    component: Login,
    meta: { disableIfLoggedIn: true },
  },
  {
    path: "/",
    name: Home,
    component: Home,
    alias: "/home",
    meta: { requiresAuth: true },
  },
  {
    path: "/about",
    name: About,
    component: About,
    meta: { requiresAuth: true },
  },
  {
    path: "/signup",
    name: SignUp,
    component: SignUp,
    meta: { disableIfLoggedIn: true },
  },
  {
    path: "/products",
    name: Products,
    component: Products,
    meta: { requiresAuth: true },
  },
  {
    path: "/products/:id",
    name: Product,
    component: Product,
    meta: { requiresAuth: true },
  },
  // { path: '/products/:id', component: Product, children: [{ path: '', name: 'product', component: Product }], },
  {
    path: "/:catchAll(.*)",
    name: "NotFound",
    component: NotFound,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach(async (to, from, next) => {
  const auth = store.state.auth.authenticated;
  // const loggedIn = store.getters.auth.isLoggedIn
  if (to.meta.requiresAuth) {
    if (!auth && to.name !== "Login") {
      next({ path: "/login" });
    } else next();
  } else if (auth && to.meta.disableIfLoggedIn) {
    next({ path: "/" });
  } else next();

});

// router.beforeEach((to, from, next) => {
//   // const auth = store.state.isAuthenticated;
//   if (to.meta.requiresAuth && !store.state.isAuthenticated && to.name !== 'Login') {
//       // if (!auth && to.name !== 'Login') {
//       // return { name: 'Login' }
//       next({ path: "/login" });
//     } else {
//       next();
//     }
// });

app.use(router).use(store).mount("#app");
