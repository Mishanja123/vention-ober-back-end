import createHttpError from "./../../helpers/createHttpError";
import { DisheshHandlers } from "../../services/dishesServices";

import { ControllerFunction } from "../../types/ControllerFunction";

export const postDish: ControllerFunction = async (req, res, next) => {
  const { title, category, price, weightGrams, ingredients } = req.body;

  if (!title || !category || !price || !weightGrams || !ingredients) {
    throw createHttpError(400, "Missing required fields");
  }

  const newDish = await DisheshHandlers.addDish({ ...req.body });

  res.status(201).json(newDish);
};
