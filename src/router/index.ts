import { Vue } from "vue-property-decorator";
import VueRouter, { RouteConfig } from "vue-router";

import LoginView from "@/views/LoginView.vue";
import SignUpView from "@/views/SignUpView.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "Home",
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
];

const router = new VueRouter({
  routes,
});

export default router;
