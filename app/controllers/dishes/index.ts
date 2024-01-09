import { errorHandlerMiddleware } from "./../../middleware/errorHandlerMiddleware ";
import { getMenuPage } from "./getMenuPage";
import { getSpecificDish } from "./getSpecificDish";
import { getRecommendationCarousel } from "./getRecommendationCarousel";

export default {
  getMenuPage: errorHandlerMiddleware(getMenuPage),
  getRecommendationCarousel: errorHandlerMiddleware(getRecommendationCarousel),
  getSpecificDish: errorHandlerMiddleware(getSpecificDish)
};
