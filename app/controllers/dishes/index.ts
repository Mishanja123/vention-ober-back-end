import { errorHandlerMiddleware } from "./../../middleware/errorHandlerMiddleware ";
import { getMenuPage } from "./getMenuPage";
import { updateDish } from "./updateDish";
import { getSpecificDish } from "./getSpecificDish";
import { getRecommendationCarousel } from "./getRecommendationCarousel";
import { getMatchedDishes } from "./getMatchedDishes";
import { postDish } from "./postDish";

export default {
  getMenuPage: errorHandlerMiddleware(getMenuPage),
  getRecommendationCarousel: errorHandlerMiddleware(getRecommendationCarousel),
  getSpecificDish: errorHandlerMiddleware(getSpecificDish),
  getMatchedDishes: errorHandlerMiddleware(getMatchedDishes),
  postDish: errorHandlerMiddleware(postDish),
  updateDish: errorHandlerMiddleware(updateDish)
};
