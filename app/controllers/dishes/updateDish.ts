import createHttpError from "./../../helpers/createHttpError";
import { DisheshHandlers } from "../../services/dishesServices";

import { ControllerFunction } from "../../interfaces/ControllerFunction";

export const updateDish: ControllerFunction = async (req, res, next) => {
  const { dishId } = req.params;
  const dish = await DisheshHandlers.getDishById(dishId);

  if (!dish) {
    throw createHttpError(404, "Dish not found");
  }

  await DisheshHandlers.updateDish(dishId, req.body);

  res.status(200).json({ message: "Success" });
};
