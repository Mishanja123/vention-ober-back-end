import { errorHandlerMiddleware } from "./../../middleware/errorHandlerMiddleware ";
import { getMenuPage } from "./getMenuPage";
import { getSpecificDish } from "./getSpecificDish";
import { getRecommendationCarousel } from "./getRecommendationCarousel";
import { getMatchedDishes } from "./getMatchedDishes";

export default {
  getMenuPage: errorHandlerMiddleware(getMenuPage),
  getRecommendationCarousel: errorHandlerMiddleware(getRecommendationCarousel),
  getSpecificDish: errorHandlerMiddleware(getSpecificDish),
  getMatchedDishes: errorHandlerMiddleware(getMatchedDishes),
};
