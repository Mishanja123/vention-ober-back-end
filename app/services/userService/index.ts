import { getAllUsers } from "./getAllUsers";
import { getUserById } from "./getUserById";
import { deleteUserById } from "./deleteUserById";
import { getUserCredentialsById } from "./getUserCredentialsById";

import { IUser } from "../../interfaces/User";
import { IUserUserCredentials } from "../../interfaces/UserCredentials";

export interface IUserHandlers {
  getAllUsers: () => Promise<IUser[]>;
  getUserById: (id: number) => Promise<IUser | null>;
  deleteUserById: (id: number) => Promise<void>;
  getUserCredentialsById: (id: number) => Promise<IUserUserCredentials | null>;
}

export const UserHandlers: IUserHandlers = {
  getAllUsers,
  getUserById,
  deleteUserById,
  getUserCredentialsById,
};
