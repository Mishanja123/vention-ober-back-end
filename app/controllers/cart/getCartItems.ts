import { ControllerFunction } from "../../interfaces/ControllerFunction";
import { CartHandlers } from "../../services/cartServices";

export const getCartItems: ControllerFunction = async (req, res, next) => {
  const { id } = req.user;
  const cartItems = await CartHandlers.getCartItems(id);
  res.status(200).json(...cartItems);
};
