import { ControllerFunction } from "../../types/ControllerFunction";
import CartService from "../../services/cartRequests";

export const getCartItems: ControllerFunction = async (req, res, next) => {
  const { id } = req.user;
  const cartItems = await CartService.getCartItems(id);
  res.status(200).json(...cartItems);
};
