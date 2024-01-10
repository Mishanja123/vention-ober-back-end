import userController from "../controllers/users";
import { Express } from "express";
import authenticate from "../middleware/authenticate";

export function router(app: Express) {
  app.get("/api/users", authenticate, userController.getAllUsers);
}

export default router;
