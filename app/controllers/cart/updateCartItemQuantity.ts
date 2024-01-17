import { ControllerFunction } from "../../types/ControllerFunction";
import CartService from "../../services/cartRequests";

export const updateCartItemQuantity: ControllerFunction = async (
  req,
  res,
  next
) => {
  const { productId, quantityModifier } = req.body;
  const { id } = req.user;

  const cart = await CartService.updateCartItemQuantity(
    Number(productId),
    id,
    Number(quantityModifier)
  );
  res.status(200).json(cart);
};
