import { ControllerFunction } from "../../interfaces/ControllerFunction";
import { CartHandlers } from "../../services/cartServices";

export const deleteAllCartItems: ControllerFunction = async (
  req,
  res,
  next
) => {
  const { id: userId } = req.user;

  const cart = await CartHandlers.deleteAllItems(userId);
  res.status(200).json(...cart);
};
