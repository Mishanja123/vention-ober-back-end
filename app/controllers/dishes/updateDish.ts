import createHttpError from "./../../helpers/createHttpError";
import Dishes from "../../services/dishesRequests";
import { ControllerFunction } from "../../types/ControllerFunction";

export const updateDish: ControllerFunction = async (req, res, next) => {
  const { dishId } = req.params;
  const dish = await Dishes.getById(dishId);

  if (!dish) {
    throw createHttpError(404, "Dish not found");
  }

  await Dishes.updateDish(dishId, req.body);

  res.status(200).json({ message: "Success" });
};
