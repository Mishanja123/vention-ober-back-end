import Cart from "../models/cart";
import createHttpError from "../helpers/createHttpError";

class CartService {
  static async getCartItems(userId: number) {
    return await Cart.findAll({ where: { userId } });
  }

  static async addToCart(userId: number, productId: number, quantity: number) {
    // Проверяем, существует ли уже товар в корзине пользователя
    const existingCartItem = await Cart.findOne({
      where: { userId, productId },
    });

    if (existingCartItem) {
      // Если существует, обновляем количество
      await existingCartItem.update({
        quantity: existingCartItem.quantity + quantity,
      });
    } else {
      // Иначе, создаем новую запись
      await Cart.create({ userId, productId, quantity });
    }
  }

  static async updateCartItem(
    userId: number,
    productId: number,
    quantity: number
  ) {
    const cartItem = await Cart.findOne({ where: { userId, productId } });

    if (!cartItem) {
      throw createHttpError(404, "Cart item not found");
    }

    await cartItem.update({ quantity });
  }

  static async removeFromCart(userId: number, productId: string) {
    const cartItem = await Cart.findOne({ where: { userId, productId } });

    if (!cartItem) {
      throw createHttpError(404, "Cart item not found");
    }

    await cartItem.destroy();
  }
}

export default CartService;
