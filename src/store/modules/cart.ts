import store from "..";
import { Product } from "../../types/Product";

interface CartProduct {
  userId: number;
  items: {
    product: Product;
    amount: number;
    selected: boolean;
  };
}

interface State {
  cart: CartProduct[];
}

const state = {
  cart: [] as CartProduct[],
};

const getters = {
  cart: (state: State) =>
    state.cart.filter((valid) => valid.userId === store.getters.userId),
};

const mutations = {
  addToCart(state: State, payload: Product) {
    if (!payload) return;

    state.cart.push({
      userId: store.getters.userId,
      items: { product: payload, amount: 1, selected: true },
    });
  },

  removeFromCart(state: State, item: Product) {
    state.cart.filter((product, index) => {
      if (product.items.product.id == item.id) {
        state.cart.splice(index, 1);
      }
    });
  },

  sumItem(state: State, payload: Product) {
    state.cart.find((product) => {
      if (product.items.product.id == payload.id) {
        product.items.amount++;
      }
    });
  },

  subItem(state: State, payload: Product) {
    state.cart.find((product) => {
      if (product.items.product.id == payload.id) {
        product.items.amount--;
      }
    });
  },
};

export default { state, getters, mutations };
