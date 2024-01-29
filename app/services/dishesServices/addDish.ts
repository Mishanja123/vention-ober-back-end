import Dish from "../../models/dish";

export const addDish = async (dish: any) => {
  return await Dish.create({ ...dish });
};
