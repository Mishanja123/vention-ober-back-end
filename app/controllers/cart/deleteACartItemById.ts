import { ControllerFunction } from "../../types/ControllerFunction";
import { CartHandlers } from "../../services/cartServices";

export const deleteACartItemById: ControllerFunction = async (
  req,
  res,
  next
) => {
  const { productId } = req.params;
  const { id } = req.user;

  const cart = await CartHandlers.deleteCartItem(Number(productId), id);
  res.status(200).json(cart);
};
