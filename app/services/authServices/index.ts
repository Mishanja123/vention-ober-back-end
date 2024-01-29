import { Model } from "sequelize";
import { IUserData } from "../../interfaces/Auth/Auth";
import { createUser } from "./createUser";
import { loginUser } from "./loginUser";

export interface IAuthHandlers {
  createUser: (data: IUserData) => Promise<string | void>;
  loginUser: (
    data: Pick<IUserData, "email" | "password">
  ) => Promise<Model<IUserData>>;
}

export const AuthHandlers: IAuthHandlers = {
  createUser,
  loginUser
};
