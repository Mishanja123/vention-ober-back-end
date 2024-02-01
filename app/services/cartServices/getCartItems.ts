import Cart from "../../models/cart";

export const getCartItems = async (userId: number) => {
  return await Cart.findAll({ where: { userId } });
};
