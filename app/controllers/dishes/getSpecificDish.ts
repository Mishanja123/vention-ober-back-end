import createHttpError from "./../../helpers/createHttpError";
import Dishes from "../../services/dishesRequests";
import { ControllerFunction } from "../../types/ControllerFunction";

export const getSpecificDish: ControllerFunction = async (req, res, next) => {
  const { dishId } = req.params;
  const dish = await Dishes.getById(dishId);

  if (!dish) {
    throw createHttpError(404, "Dish not found");
  }

  res.status(200).json({ dish });
};
