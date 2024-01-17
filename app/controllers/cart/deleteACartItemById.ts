import { ControllerFunction } from "../../types/ControllerFunction";
import CartService from "../../services/cartRequests";

export const deleteACartItemById: ControllerFunction = async (
  req,
  res,
  next
) => {
  const { productId } = req.params;
  const { id } = req.user;

  const cart = await CartService.deleteCartItem(Number(productId), id);
  res.status(200).json(cart);
};
