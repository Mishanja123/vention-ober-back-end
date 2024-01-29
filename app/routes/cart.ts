import cartController from "../controllers/cart";
import { Express } from "express";
import authenticate from "../middleware/authenticate";

export function router(app: Express) {
  app
    .post("/api/cart", authenticate, cartController.addToCart)
    .get("/api/cart", authenticate, cartController.getCartItems)
    .delete("/api/cart", authenticate, cartController.deleteAllCartItems)
    .delete(
      "/api/cart/:productId",
      authenticate,
      cartController.deleteACartItemById
    )
    .patch("/api/cart", authenticate, cartController.updateCartItemQuantity);
}

export default router;
