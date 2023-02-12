import { Vue } from "vue-property-decorator";
import store from "../store";
import VueRouter, { RouteConfig } from "vue-router";

import HomeView from "@/views/HomeView.vue";
import LoginView from "@/views/LoginView.vue";
import SignUpView from "@/views/SignUpView.vue";
import ProductsFromOriginView from "@/views/ProductsFromOriginView.vue";
import ShopCartView from "@/views/ShopCartView.vue";
import CheckoutView from "@/views/CheckoutView.vue";

Vue.use(VueRouter);

const unprotectedRoutes: Array<RouteConfig> = [
  {
    path: "/",
    name: "Home",
    component: HomeView,
  },
  {
    path: "/login",
    name: "login",
    component: LoginView,
  },
  {
    path: "/signUp",
    name: "SignUp",
    component: SignUpView,
  },
  {
    path: "/product/:origin",
    name: "Product",
    component: ProductsFromOriginView,
  },
  {
    path: "/cart",
    name: "Shop Cart",
    component: ShopCartView,
  },
];

const protectedRoutes: Array<RouteConfig> = [
  {
    path: "/checkout",
    name: "Checkout",
    component: CheckoutView,
  },
];

const router = new VueRouter({
  routes: [...unprotectedRoutes, ...protectedRoutes],
});

router.beforeEach(async (to, never, next) => {
  if (
    !store.getters.auth &&
    !unprotectedRoutes.find((route) => route.name === to.name)
  ) {
    next({ name: "login" });
  } else {
    next();
  }
});

export default router;
