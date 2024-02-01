import { ControllerFunction } from "../../types/ControllerFunction";
import { CartHandlers } from "../../services/cartServices";

export const addToCart: ControllerFunction = async (req, res, next) => {
  const { productId } = req.body;
  const { id: userId } = req.user;

  const cart = await CartHandlers.addToCart(productId, userId);
  res.status(201).json(cart);
};
