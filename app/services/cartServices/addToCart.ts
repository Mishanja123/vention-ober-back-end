import Cart from "../../models/cart";
import Dish from "../../models/dish";
import createHttpError from "../../helpers/createHttpError";
import cartMessages from "../../messages/cartMessages";
import { updateCart } from "./updateCart";

export const addToCart = async (productId: number, userId: number) => {
  try {
    // @ts-ignore
    return Cart.sequelize.transaction(async (transaction) => {
      const cart = await Cart.findOne({ where: { userId }, transaction });
      const dish = await Dish.findByPk(productId);

      if (!cart || !dish) {
        throw createHttpError(404, cartMessages.CART_OR_DISH_NOT_FOUND_MESSAGE);
      }

      const existingCartItemIndex = cart.dishes.findIndex(
        (item: any) => item.dishData.id == productId
      );

      if (existingCartItemIndex !== -1) {
        cart.dishes[existingCartItemIndex].quantity += 1;
        cart.dishes[existingCartItemIndex].subtotal =
          // @ts-ignore
          dish.price * cart.dishes[existingCartItemIndex].quantity;
      } else {
        cart.dishes.push({
          // @ts-ignore
          dishData: dish,
          quantity: 1,
          // @ts-ignore
          subtotal: Number(dish.price),
        });
      }
      //@ts-expect-error
      await updateCart(cart, transaction);

      return cart;
    });
  } catch (error) {
    console.log("🚀 : error", error);
    throw createHttpError(500, cartMessages.SERVER_ERROR_MESSAGE);
  }
};
