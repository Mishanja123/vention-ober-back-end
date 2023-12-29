import express from "express";

const router = express.Router();

import * as dishController from "../controllers/dishes";

router.get("/", dishController.getMenuPage);

router.get(
  "/recommendation-carousel",
  dishController.getRecommendationCarousel
);

router.get("/:dishId", dishController.getSpecificDish);




export default router;

