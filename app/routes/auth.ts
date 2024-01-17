import authController from "../controllers/auth";
import { Express } from "express";
import authenticate from "../middleware/authenticate";

export function router(app: Express) {
  app
    .post("/api/auth/sign-up", authController.postSingUp)
    .post("/api/auth/login", authController.postSingIn)
    .get("/api/auth/current-user", authenticate, authController.getCurrentUser)
    .get("/api/auth/refresh", authController.getRefreshTokens)
    .get("/api/auth/logout", authController.postLogOut);
}

export default router;
