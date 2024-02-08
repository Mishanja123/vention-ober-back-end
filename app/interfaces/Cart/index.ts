import { Model } from "sequelize";
import { IDish } from "../Dish";

export interface ICart extends Model {
  id: number;
  total: number;
  subTotal: number;
  dishes: IDish[];
}
