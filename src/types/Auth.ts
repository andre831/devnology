import { User } from "./User";

export interface UserAuth {
  data: {
    token: string;
    auth: boolean;
    user: User;
    status: boolean;
  };
}

export interface UserLogged {
  userId: number;
  name: string;
  id: number;
  auth: boolean;
  token: string;
}
