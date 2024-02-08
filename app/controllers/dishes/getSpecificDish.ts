import createHttpError from "./../../helpers/createHttpError";

import { ControllerFunction } from "../../interfaces/ControllerFunction";
import { DisheshHandlers } from "../../services/dishesServices";

export const getSpecificDish: ControllerFunction = async (req, res, next) => {
  const { dishId } = req.params;
  const dish = await DisheshHandlers.getDishById(dishId);

  if (!dish) {
    throw createHttpError(404, "Dish not found");
  }

  res.status(200).json({ dish });
};
