import { ControllerFunction } from "./../../types/ControllerFunction";
import Dishes from "../../services/dishesRequests";

export const getMatchedDishes: ControllerFunction = async (req, res, next) => {
  const dishes = await Dishes.getMatchedDishes(req.body.title);
  res.status(200).json({ dishes });
};
