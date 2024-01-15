import orderController from "../controllers/orders";
import { Express } from "express";
import authenticate from "../middleware/authenticate";

export function router(app: Express) {
  app.get("/api/orders", authenticate, orderController.getAllOrders);

  app.patch("/api/orders/:id", authenticate, orderController.updateOrder);

  app.delete("/api/orders/:id", authenticate, orderController.deleteOrderById);
}

export default router;
