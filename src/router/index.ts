import { Vue } from "vue-property-decorator";
import VueRouter, { RouteConfig } from "vue-router";
import CheckoutView from "@/views/CheckoutView.vue";
import UserView from "@/views/UserView.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "home",
  },
  {
    path: "/checkout",
    name: "checkout",
    component: CheckoutView,
  },
  {
    path: "/user",
    name: "user",
    component: UserView,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
