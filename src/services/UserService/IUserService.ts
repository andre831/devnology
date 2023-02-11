import { NewUserAuth } from "../../types/Auth";
import { NewUser } from "../../types/User";

export default interface IUserService {
  signUp(infos: NewUser): Promise<NewUserAuth>;
}
