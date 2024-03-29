import { getAllUsers } from "./getAllUsers";
import { getUserById } from "./getUserById";
import { deleteUserById } from "./deleteUserById";
import { getUserCredentialsById } from "./getUserCredentialsById";

import { IUser } from "../../models/user";
import { IUserUserCredentials } from "../../models/userCredentials";

export interface IUserHandlers {
  getAllUsers: () => Promise<IUser[]>;
  getUserById: (id: number, attributes?: string[]) => Promise<IUser | null>;
  deleteUserById: (id: number) => Promise<void>;
  getUserCredentialsById: (
    id: number,
    attributes?: string[]
  ) => Promise<IUserUserCredentials | null>;
}

export const UserHandlers: IUserHandlers = {
  getAllUsers,
  getUserById,
  deleteUserById,
  getUserCredentialsById,
};
