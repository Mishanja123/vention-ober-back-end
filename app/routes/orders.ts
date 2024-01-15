import { Express } from "express";

import ordersController from "../controllers/orders";
import authenticate from "../middleware/authenticate";

export function router(app: Express) {
  app.post(
    "/api/orders/table-reservation",
    authenticate,
    ordersController.postReservation
  );
  app.post(
    "/api/orders",
    authenticate,
    ordersController.postOrder
  );
  app.delete(
    "/api/orders",
    authenticate,
    ordersController.deleteOrder
  );
}

export default router;
