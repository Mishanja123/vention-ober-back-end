import { Express } from "express";

import paymentController from "../controllers/payment";
import authenticate from "../middleware/authenticate";

export function router(app: Express) {
  app.post("/api/payment", authenticate, paymentController.postPayment);
  app.get("/api/payment/:id", authenticate, paymentController.getPaymentCard);
  app.post("/api/payout", authenticate, paymentController.postPaymentDetails);
}

export default router;
