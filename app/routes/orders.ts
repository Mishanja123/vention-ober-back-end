import { Express } from "express";

import ordersController from "../controllers/orders";
import authenticate from "../middleware/authenticate";

export function router(app: Express) {
  app.post(
    "/api/orders/table-reservation",
    authenticate,
    ordersController.createTableReservation
  );
  app.post("/api/orders", authenticate, ordersController.createNewOrder);
  app.post("/api/order-repeat", authenticate, ordersController.createNewOrder);
  app.get("/api/orders", authenticate, ordersController.getAllOrdersByUserId);
  app.get("/api/order/:id", authenticate, ordersController.getOrderById);
  app.patch("/api/order/:id", authenticate, ordersController.updateOrderById);
  app.delete("/api/order/:id", authenticate, ordersController.deleteOrderById);
  app.get(
    "/api/orders-admin",
    authenticate,
    ordersController.getAllOrdersAdmin
  );
}

export default router;
