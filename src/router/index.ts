import { Vue } from "vue-property-decorator";
import VueRouter, { RouteConfig } from "vue-router";

import HomeView from "@/views/HomeView.vue";
import LoginView from "@/views/LoginView.vue";
import SignUpView from "@/views/SignUpView.vue";
import ProductView from "@/views/ProductView.vue";
import ShopCartView from "@/views/ShopCartView.vue";
import CheckoutView from "@/views/CheckoutView.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
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
    path: "/product/:origin/:id",
    name: "Product",
    component: ProductView,
  },
  {
    path: "/cart",
    name: "Shop Cart",
    component: ShopCartView,
  },
  {
    path: "/checkout",
    name: "Checkout",
    component: CheckoutView,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
