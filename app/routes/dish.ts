import dishController from "../controllers/dishes";
import { Express } from "express";

export function router(app: Express) {
  app
    .get("/api/dishes", dishController.getMenuPage)
    .get(
      "/api/dishes/recommendation-carousel",
      dishController.getRecommendationCarousel
    )
    .get("/api/dishes/:dishId", dishController.getSpecificDish);
}

export default router;
