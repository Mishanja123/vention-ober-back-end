import { Model } from "sequelize";
import { IUserData } from "../../interfaces/Auth/Auth";
import { createUser } from "./createUser";
import { loginUser } from "./loginUser";

export interface IAuthHandlers {
  createUser: (data: IUserData) => Promise<string | void>;
  loginUser: (
    { email, password }: Pick<IUserData, "email" | "password">
  ) => Promise<Pick<IUserData, "firstName" | "id">>;
}

export const AuthHandlers: IAuthHandlers = {
  createUser,
  loginUser
};
