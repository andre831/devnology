import { UserAuth } from "../../types/Auth";
import { NewUser } from "../../types/User";

export default interface IUserService {
  signUp(infos: NewUser): Promise<UserAuth>;
  login(infos: { email: string; password: string }): Promise<UserAuth>;
}
