import authController from "../controllers/auth";
import { Express } from "express";
import authenticate from "../middleware/authenticate";

export function router(app: Express) {
  app
    .post("/api/auth/sign-up", authController.signUp)
    .post("/api/auth/login", authController.signIn)
    .get("/api/auth/current-user", authenticate, authController.getCurrentUser)
    .get("/api/auth/refresh", authController.getRefreshTokens)
    .get("/api/auth/logout", authController.logOut);
}

export default router;
