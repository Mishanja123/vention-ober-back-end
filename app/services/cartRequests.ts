import Cart from "../models/cart";
import createHttpError from "../helpers/createHttpError";

class CartService {
  static async getCartItems(userId: number) {
    return await Cart.findAll({ where: { userId } });
  }

  static async addToCart(dishId: number, quantity: number) {
    const existingCartItem = await Cart.findOne({
      where: { userId, dishId },
    });

    if (existingCartItem) {
      await existingCartItem.update({
        quantity: existingCartItem.quantity + quantity,
      });
    } else {
      await Cart.create({ userId, dishId, quantity });
    }
  }

  static async updateCartItem(
    userId: number,
    dishId: number,
    quantity: number
  ) {
    const cartItem = await Cart.findOne({ where: { userId, dishId } });

    if (!cartItem) {
      throw createHttpError(404, "Cart item not found");
    }

    await cartItem.update({ quantity });
  }

  static async removeFromCart(userId: number, dishId: string) {
    const cartItem = await Cart.findOne({ where: { userId, dishId } });

    if (!cartItem) {
      throw createHttpError(404, "Cart item not found");
    }

    await cartItem.destroy();
  }
}

export default CartService;
