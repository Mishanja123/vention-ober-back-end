import Dish from "../../models/dish";
import createHttpError from "../../helpers/createHttpError";
import dishMessages from "../../messages/dishMessages";

export const updateDish = async (
  dishId: string,
  updatedData: Partial<typeof Dish>
) => {
  const dish = await Dish.findByPk(dishId);

  if (!dish) {
    throw createHttpError(404, dishMessages.DISH_NOT_FOUND);
  }

  Object.assign(dish, updatedData);

  await dish.save();

  return dish;
};
