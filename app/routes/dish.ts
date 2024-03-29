import dishController from "../controllers/dishes";
import { Express } from "express";
import authenticate from "../middleware/authenticate";

export function router(app: Express) {
  app
    .get("/api/dishes", dishController.getMenuPage)
    .get(
      "/api/dishes/recommendation-carousel",
      dishController.getRecommendationCarousel
    )
    .get("/api/dishes/:dishId", dishController.getSpecificDish)
    .post("/api/matched-dishes", dishController.getMatchedDishes)
    .patch("/api/dishes/:dishId", dishController.updateDish)
    .post("/api/dishes", dishController.postDish);
}

export default router;
