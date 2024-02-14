import createHttpError from "./../../helpers/createHttpError";
import { DisheshHandlers } from "../../services/dishesServices";

import { ControllerFunction } from "../../interfaces/ControllerFunction";

export const postDish: ControllerFunction = async (req, res, next) => {
  const { title, category, price, weightGrams, ingredients, photoPath } =
    req.body;

  if (
    !title ||
    !category ||
    !price ||
    !weightGrams ||
    !ingredients ||
    !photoPath
  ) {
    throw createHttpError(400, "Missing required fields");
  }

  const newDish = await DisheshHandlers.addDish({ ...req.body });

  res.status(201).json(newDish);
};
