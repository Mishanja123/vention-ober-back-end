import { ControllerFunction } from "../../types/ControllerFunction";
import CartService from "../../services/cartRequests";

export const addToCart: ControllerFunction = async (req, res, next) => {
  const { productId } = req.body;
  const { id: userId } = req.user;

  const cart = await CartService.addToCart(productId, userId);
  res.status(201).json(cart);
};
