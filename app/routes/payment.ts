import { Express } from "express";

import paymentController from "../controllers/payment";
import authenticate from "../middleware/authenticate";

export function router(app: Express) {
  app.patch("/api/payment/:id", authenticate, paymentController.updateCreditCardById);
  app.get("/api/payments", authenticate, paymentController.getAllCreditCards);
  app.post("/api/payment", authenticate, paymentController.createCreditCard);
  app.get(
    "/api/payment/:id",
    authenticate,
    paymentController.getPaymentCardById
  );
  app.post("/api/payout", authenticate, paymentController.updatePaymentDetails);
}

export default router;
