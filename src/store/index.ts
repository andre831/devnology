import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";
import { createDirectStore } from "direct-vuex";

import auth from "./modules/auth";
import cart from "./modules/cart";
import resumes from "./modules/resumes";

Vue.use(Vuex);

const { store } = createDirectStore({
  modules: {
    auth,
    cart,
    resumes,
  },
  plugins: [createPersistedState()],
});

export default store;
export type AppStore = typeof store;
declare module "vuex" {
  interface Store<S> {
    direct: AppStore;
  }
}
