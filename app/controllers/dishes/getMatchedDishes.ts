import { ControllerFunction } from "./../../types/ControllerFunction";
import { DisheshHandlers } from "../../services/dishesServices";

export const getMatchedDishes: ControllerFunction = async (req, res, next) => {
  const dishes = await DisheshHandlers.getMatchedDishes(req.body.title);
  res.status(200).json({ dishes });
};
