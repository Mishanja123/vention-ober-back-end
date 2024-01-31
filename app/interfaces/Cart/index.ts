import { IDish } from "../Dish";

export interface ICart {
  id: number;
  total: number;
  subTotal: number;
  dishes: IDish[];
}
