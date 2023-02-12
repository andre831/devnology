import store from "../index";

interface UserDeliveryInformations {
  userId: number;
  local: {
    id: number;
    cep: string;
    way: string;
    complement: string;
  };
}

interface State {
  userDelivery: UserDeliveryInformations[];
}

const state = {
  userDelivery: [] as UserDeliveryInformations[],
};

const getters = {
  userDelivery: (state: State) => state.userDelivery,
};

const mutations = {
  addDeliveryLocal(state: State, info: any) {
    const { cep, way, complement } = info;

    state.userDelivery.find((local) => {
      if (local.userId === info.userId) {
        local.local.cep = cep;
        local.local.way = way;
        local.local.complement = complement;
      } else if (local.userId !== info.userId) {
        state.userDelivery.push({ userId: store.getters.userId, local: info });
      }
    });
  },
};

export default { state, getters, mutations };
