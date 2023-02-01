import { Vue } from "vue-property-decorator";
import VueRouter, { RouteConfig } from "vue-router";

import HomeView from "@/views/HomeView.vue";
import LoginView from "@/views/LoginView.vue";
import SignUpView from "@/views/SignUpView.vue";
import ProductView from "@/views/ProductView.vue";

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
    path: "/product/:id",
    name: "Product",
    component: ProductView,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
