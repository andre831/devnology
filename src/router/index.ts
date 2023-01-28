import { Vue } from "vue-property-decorator";
import VueRouter, { RouteConfig } from "vue-router";
import CheckoutView from "@/views/CheckoutView.vue";
import UserView from "@/views/UserView.vue";

import LoginView from "@/views/LoginView.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "home",
  },
  {
    path: "/login",
    name: "login",
    component: LoginView,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
