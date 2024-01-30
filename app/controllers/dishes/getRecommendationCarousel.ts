import { ControllerFunction } from "./../../types/ControllerFunction";
import { DisheshHandlers } from "../../services/dishesServices";



export const getRecommendationCarousel: ControllerFunction = async (
  req,
  res,
  next
) => {
  const dishes = await DisheshHandlers.getRecent();
  res.status(200).json({ dishes });
};
