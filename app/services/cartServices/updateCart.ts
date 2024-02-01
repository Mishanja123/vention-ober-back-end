import { ICart } from "../../interfaces/Cart";
import Cart from "../../models/cart";

export const updateCart = async (cart: ICart, transaction: any) => {
  cart.subTotal = cart.dishes.reduce(
    (total: number, item: any) => total + item.subtotal,
    0
  );
  cart.total = cart.subTotal;

  await Cart.update(
    { dishes: [...cart.dishes], subTotal: cart.subTotal, total: cart.total },
    { where: { id: cart.id }, transaction }
  );
};
