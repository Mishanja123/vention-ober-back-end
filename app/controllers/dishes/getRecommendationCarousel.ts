import { ControllerFunction } from "./../../types/ControllerFunction";
import Dishes from "../../services/dishesRequests";


export const getRecommendationCarousel: ControllerFunction = async (
  req,
  res,
  next
) => {
  const dishes = await Dishes.getRecent();
  res.status(200).json({ dishes });
};
