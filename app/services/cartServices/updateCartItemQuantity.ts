import createHttpError from "../../helpers/createHttpError";
import cartMessages from "../../messages/cartMessages";
import Cart from "../../models/cart";
import Dish from "../../models/dish";
import { updateCart } from "./updateCart";

export const updateCartItemQuantity = async (
  productId: number,
  userId: number,
  quantityModifier: number
) => {
  try {
    // @ts-ignore
    return Cart.sequelize.transaction(async (transaction) => {
      const cart = await Cart.findOne({ where: { userId }, transaction });

      if (!cart) {
        throw createHttpError(404, cartMessages.CART_NOT_FOUND_MESSAGE);
      }

      const existingCartItemIndex = cart.dishes.findIndex(
        (item: any) => item.dishData.id == productId
      );
      const dish = await Dish.findByPk(productId);

      if (existingCartItemIndex !== -1) {
        // @ts-ignore
        cart.subTotal += quantityModifier * dish.price;
        // @ts-ignore
        cart.total += quantityModifier * dish.price;

        //@ts-expect-error
        cart.dishes[existingCartItemIndex].quantity += quantityModifier;
        //@ts-expect-error
        cart.dishes[existingCartItemIndex].subtotal =
          // @ts-ignore
          dish.price * cart.dishes[existingCartItemIndex].quantity;
        await updateCart(cart, transaction);

        return cart;
      } else {
        throw createHttpError(404, cartMessages.CART_ITEM_NOT_FOUND_MESSAGE);
      }
    });
  } catch (error) {
    console.log("Error", error);
    throw createHttpError(500, cartMessages.SERVER_ERROR_MESSAGE);
  }
};
