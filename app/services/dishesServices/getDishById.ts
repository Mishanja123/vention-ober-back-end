import Dish from "../../models/dish";

export const getDishById = async (dishId: string) => {
  return await Dish.findByPk(dishId);
};
