import { Model } from "sequelize";

export interface ICreditCard extends Model {
  id?: number;
  addressTitle: string;
  cardNumber: string;
  month: number;
  year: number;
  cvvNumber: number;
  cardHolder: string;
  userId: number;
}
