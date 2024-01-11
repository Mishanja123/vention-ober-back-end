import createHttpError from "./../../helpers/createHttpError";
import Dishes from "../../services/dishesRequests";
import { ControllerFunction } from "../../types/ControllerFunction";

export const postDish: ControllerFunction = async (req, res, next) => {
  const { title, category, price, weight_grams, ingredients } = req.body;

  if (!title || !category || !price || !weight_grams || !ingredients) {
    throw createHttpError(400, "Missing required fields");
  }

  const newDish = await Dishes.postDish({ ...req.body });

  res.status(201).json(newDish);
};
