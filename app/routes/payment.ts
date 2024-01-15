import { Express } from "express";

import ordersController from "../controllers/payment";
import authenticate from "../middleware/authenticate";

export function router(app: Express) {
  app.post("/api/payment", authenticate, ordersController.postPayment);
}

export default router;
