import { Product } from "../../types/Product";

interface CartProduct {
  product: Product;
  amount: number;
  selected: boolean;
}

interface State {
  cart: CartProduct[];
}

const state = {
  cart: [] as CartProduct[],
};

const getters = {
  cart: (state: State) => state.cart,
};

const mutations = {
  addToCart(state: State, payload: Product) {
    if (!payload) return;

    state.cart.push({ product: payload, amount: 1, selected: true });
  },

  removeFromCart(state: State, item: Product) {
    state.cart.filter((product, index) => {
      if (product.product.id == item.id) {
        state.cart.splice(index, 1);
      }
    });
  },

  sumItem(state: State, payload: Product) {
    state.cart.find((product) => {
      if (product.product.id == payload.id) {
        product.amount++;
      }
    });
  },

  subItem(state: State, payload: Product) {
    state.cart.find((product) => {
      if (product.product.id == payload.id) {
        product.amount--;
      }
    });
  },
};

export default { state, getters, mutations };
