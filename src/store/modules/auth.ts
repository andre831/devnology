const state = {
  userToken: "",
};

const getters = {
  userToken: (state: { userToken: string }) => state.userToken,
};

const mutations = {
  async setUserToken(state: { userToken: string }, token: string) {
    state.userToken = token;
  },
};

export default { state, getters, mutations };
