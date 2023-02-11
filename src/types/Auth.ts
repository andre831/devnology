import { NewUser } from "./User";

export interface LoginAuth {
  data: {
    token: string;
    auth: boolean;
    status: string;
  };
}

export interface NewUserAuth {
  data: {
    token: string;
    auth: boolean;
    user: NewUser;
    status: boolean;
  };
}
