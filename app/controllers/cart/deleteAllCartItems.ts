import { ControllerFunction } from "../../types/ControllerFunction";
import CartService from "../../services/cartRequests";

export const deleteAllCartItems: ControllerFunction = async (
  req,
  res,
  next
) => {
  const { id: userId } = req.user;

  const cart = await CartService.deleteAllItems(userId);
  res.status(200).json(...cart);
};
