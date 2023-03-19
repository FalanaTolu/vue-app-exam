import { createApp } from "vue";
import App from "./App.vue";
import { createRouter, createWebHistory } from "vue-router";
import { h } from "vue";
import { RouterView } from "vue-router";
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
    component: { render: () => h(RouterView) },
    children: [
      { path: "", name: "Products", component: Products },
      { path: "/products/:id", name: "Product", component: Product },
    ],
    meta: { requiresAuth: true },
  },
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
  if (to.meta.requiresAuth) {
    if (!auth && to.name !== "Login") {
      next({ path: "/login" });
    } else next();
  } else if (auth && to.meta.disableIfLoggedIn) {
    next({ path: "/" });
  } else next();
});

app.use(router).use(store).mount("#app");
