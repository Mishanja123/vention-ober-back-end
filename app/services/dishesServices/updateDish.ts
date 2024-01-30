import Dish from "../../models/dish";
import createHttpError from "../../helpers/createHttpError";

export const updateDish = async (
  dishId: string,
  updatedData: Partial<typeof Dish>
) => {
  const dish = await Dish.findByPk(dishId);

  if (!dish) {
    throw createHttpError(404, "Dish not found");
  }

  Object.assign(dish, updatedData);

  await dish.save();

  return dish;
};
