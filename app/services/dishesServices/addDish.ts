import { IDish } from "../../models/dish";
import Dish from "../../models/dish";

export const addDish = async (dish: IDish) => {
  return await Dish.create({ ...dish });
};
