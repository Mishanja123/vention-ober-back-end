import { ControllerFunction } from "../../interfaces/ControllerFunction";
import { CartHandlers } from "../../services/cartServices";

export const updateCartItemQuantity: ControllerFunction = async (
  req,
  res,
  next
) => {
  const { productId, quantityModifier } = req.body;
  const { id } = req.user;

  const cart = await CartHandlers.updateCartItemQuantity(
    Number(productId),
    id,
    Number(quantityModifier)
  );
  res.status(200).json(cart);
};
