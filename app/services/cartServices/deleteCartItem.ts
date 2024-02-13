import createHttpError from "../../helpers/createHttpError";
import { IDish } from "../../models/dish";
import cartMessages from "../../messages/cartMessages";
import Cart from "../../models/cart";
import { updateCart } from "./updateCart";

interface IDishData {
  dishData: IDish;
}

export const deleteCartItem = async (productId: number, userId: number) => {
  try {
    // @ts-ignore
    return Cart.sequelize.transaction(async (transaction) => {
      const cart = await Cart.findOne({ where: { userId }, transaction });

      if (!cart) {
        throw createHttpError(404, cartMessages.CART_NOT_FOUND_MESSAGE);
      }

      const existingCartItemIndex = cart.dishes.findIndex(
        //@ts-expect-error
        (item: IDishData) => item.dishData.id == productId
      );

      if (existingCartItemIndex !== -1) {
        // @ts-ignore
        cart.subTotal -= cart.dishes[existingCartItemIndex].subtotal;
        // @ts-ignore
        cart.total -= cart.dishes[existingCartItemIndex].subtotal;
        cart.dishes.splice(existingCartItemIndex, 1);

        await updateCart(cart, transaction);

        return cart;
      } else {
        throw createHttpError(404, cartMessages.CART_ITEM_NOT_FOUND_MESSAGE);
      }
    });
  } catch (error) {
    console.log("Error occured ", error);
    throw createHttpError(500, cartMessages.SERVER_ERROR_MESSAGE);
  }
};
