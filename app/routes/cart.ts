import express from "express";
import {
  getCart,
  addToCart,
  removeFromCart,
  clearCart,
  updateCart,
} from "../controllers/cart";

const router = express.Router();

router.get("/api/cart", getCart);
router.post("/api/cart/add", addToCart);
router.delete("/api/cart/remove", removeFromCart);
router.delete("/api/cart/clear", clearCart);
router.put("/api/cart/update", updateCart);

export default router;
