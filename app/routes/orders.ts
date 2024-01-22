import { Express } from "express";

import ordersController from "../controllers/orders";
import authenticate from "../middleware/authenticate";

export function router(app: Express) {
  app.post(
    "/api/orders/table-reservation",
    authenticate,
    ordersController.postReservation
  );
  app.post("/api/orders", authenticate, ordersController.postOrder);
  app.post("/api/orders-repeat", authenticate, ordersController.postOrder);
  // app.patch(
  //   "/api/orders-update/:id",
  //   authenticate,
  //   ordersController.updateOrder
  // );
  app.get("/api/orders", authenticate, ordersController.getAllOrders);
  app.delete("/api/orders/:id", authenticate, ordersController.deleteOrder);
  app.get("/api/orders/:id", authenticate, ordersController.getOrder);
  app.get(
    "/api/orders-admin",
    authenticate,
    ordersController.getAllOrdersAdmin
  );
}

export default router;
