import axios from "axios";
import { injectable } from "inversify-props";

import { NewUser } from "../../types/User";

import IUserService from "./IUserService";

@injectable()
export default class UserService implements IUserService {
  async signUp(infos: NewUser) {
    const assigned = await axios
      .post("http://localhost:3333/login/new", infos)
      .then((res) => res.data)
      .catch((err) => {
        throw err;
      });

    return assigned;
  }

  async login(infos: any) {
    const logged = await axios
      .post("http://localhost:3333/login", infos)
      .then((res) => res.data)
      .catch((err) => {
        throw err;
      });

    return logged;
  }
}
