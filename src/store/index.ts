import Vue from "vue";
import Vuex from "vuex";
import { Product } from "../types/Product";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    cart: [] as Product[],
    user: {
      isAuthenticated: false,
      idToken: "",
    },
  },

  getters: {
    cart: (state) => state.cart,
  },

  actions: {
    addToCart({ commit }, payload) {
      commit("ADD_T0_CART", payload);
    },

    removeFromCart({ commit }, item) {
      commit("REMOVE_FROM_CART", item);
    },
  },

  mutations: {
    ADD_T0_CART(state, payload) {
      if (!payload) return;

      state.cart.push(payload);

      console.log(state.cart);
    },

    REMOVE_FROM_CART(state, item) {
      if (!item.id) return;

      state.cart.splice(item, 1);

      console.log(state.cart);
    },
  },
  modules: {},
});
