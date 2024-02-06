import userController from "../controllers/users";
import { Express } from "express";
import authenticate from "../middleware/authenticate";

export function router(app: Express) {
  app.get("/api/users", authenticate, userController.getAllUsers);

  app.get("/api/me", authenticate, userController.getUserById);

  app.patch("/api/users/:id", authenticate, userController.updateUserById);

  app.delete("/api/users/:id", authenticate, userController.deleteUserById);
}

export default router;
