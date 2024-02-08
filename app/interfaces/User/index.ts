import { Model } from "sequelize";

export interface IUser extends Model {
  id: number;
  avatar: string | null;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  userCredentialsId: number;
  orderId: number | null;
}
