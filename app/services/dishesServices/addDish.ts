import { IDish } from "../../interfaces/Dish";
import Dish from "../../models/dish";

export const addDish = async (dish: IDish) => {
  return await Dish.create({ ...dish });
};
