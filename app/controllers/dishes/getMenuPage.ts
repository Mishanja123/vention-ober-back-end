import { ControllerFunction } from "./../../types/ControllerFunction";
import { DisheshHandlers } from "../../services/dishesServices";

export const getMenuPage: ControllerFunction = async (req, res, next) => {
  const dishes = await DisheshHandlers.getAllDishes();
  res.status(200).json({ dishes });
};
