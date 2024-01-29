import { Express } from "express";
import authenticate from "../middleware/authenticate";
import { upload } from "../middleware/upload";
import s3Controller from "../controllers/s3";

export function router(app: Express) {
  app.post("/api/images", upload.single("image"), s3Controller.uploadImage);
  app.get("/api/images", s3Controller.getProfileImageById);
  app.post(
    "/api/dish-images",
    upload.single("image"),
    s3Controller.uploadImage
  );
  app.post("/api/dish-image", s3Controller.getDishImageByName);
}

export default router;
