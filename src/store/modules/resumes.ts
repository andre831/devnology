const state = {
  delivery: 25,
  totalItems: 0,
  totalValue: 0,
};

const getters = {
  delivery: (state: { delivery: number }) => state.delivery,
  totalItems: (state: { totalItems: number }) => state.totalItems,
  totalValue: (state: { totalValue: number }) => state.totalValue,
};

const mutations = {
  setDelivery(state: { delivery: number }, value: number) {
    state.delivery = 25;
  },

  setTotalItems(state: { totalItems: number }, value: number) {
    state.totalItems = value;
  },

  setTotalValues(state: { totalValue: number }, value: number) {
    state.totalValue = value;
  },
};

export default {
  state,
  getters,
  mutations,
};
