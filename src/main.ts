import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import buildDependencyContainer from "./app.container";

buildDependencyContainer();

Vue.config.productionTip = false;

new Vue({
  router,
  store: store.original,
  render: (h) => h(App),
}).$mount("#app");
