import { UserAuth, UserLogged } from "../../types/Auth";

interface Teste {
  auth: false;
  token: undefined;
  name: undefined;
  userId: undefined;
}

const state = {
  user: {
    name: undefined,
    auth: false,
    userId: undefined,
    token: undefined,
  },
};

const getters = {
  token: (state: { user: UserLogged }) => state.user.token,
  auth: (state: { user: UserLogged }) => state.user.auth,
  userId: (state: { user: UserLogged }) => state.user.userId,
  name: (state: { user: UserLogged }) => state.user.name,
};

const mutations = {
  async setUser(state: { user: UserLogged }, authorized: UserAuth | Teste) {
    const userAuthorized = authorized as UserAuth;

    const { auth, token, user } = userAuthorized.data;

    state.user.token = token;
    state.user.auth = auth;
    state.user.name = user.name;
    state.user.userId = user.id;
  },
};

export default { state, getters, mutations };
