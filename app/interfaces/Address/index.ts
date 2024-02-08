import { Model } from "sequelize";

export interface IAddress extends Model {
  id?: number;
  title: string;
  city: string;
  street: string;
  houseNumber: string;
  unit: string;
  flatNumber: string;
}
