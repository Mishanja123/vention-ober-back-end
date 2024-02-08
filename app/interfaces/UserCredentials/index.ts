import { Model } from "sequelize";
import { UserRole } from "../../enums/User";

export interface IUserUserCredentials extends Model {
  id: number;
  password: string;
  role: UserRole;
}
