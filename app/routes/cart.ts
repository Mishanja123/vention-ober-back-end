import * as cartController from "../controllers/cart/cartControllers";
import { Express } from "express";
import authenticate from "../middleware/authenticate";

export function router(app: Express) {
  app
    .get("/api/cart", authenticate, cartController.getCartItems)
    .post("/api/cart/add", authenticate, cartController.addToCart)
    .patch("/api/cart/update", authenticate, cartController.updateCartItem)
    .delete(
      "/api/cart/remove/:dishId",
      authenticate,
      cartController.removeFromCart
    );
}

export default router;
