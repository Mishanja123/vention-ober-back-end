import Cart from "../models/cart";
import Dish from "../models/dish";
import createHttpError from "../helpers/createHttpError";

const CartService = {
  deleteAllItems: async (userId: number) => {
    // @ts-ignore
    return Cart.sequelize.transaction(async (transaction) => {
      const userCart = await Cart.update(
        { dishes: [], subTotal: 0, total: 0 },
        { where: { userId }, transaction }
      );
      return Cart.findAll({ where: { userId }, transaction });
    });
  },
  getCartItems: async (userId: number) => {
    return await Cart.findAll({ where: { userId } });
  },

  addToCart: async (productId: number, userId: number) => {
    try {
      // @ts-ignore
      return Cart.sequelize.transaction(async (transaction) => {
        const cart = await Cart.findOne({ where: { userId }, transaction });
        const dish = await Dish.findByPk(productId);

        if (!cart || !dish) {
          throw createHttpError(404, "Cart or dish not found");
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
            subtotal: Number(dish.price)
          });
        }

        await CartService.updateCart(cart, transaction);

        return cart;
      });
    } catch (error) {
      console.log("🚀 : error", error);
      throw createHttpError(500, "Internal Server Error");
    }
  },

  deleteCartItem: async (productId: number, userId: number) => {
    try {
      // @ts-ignore
      return Cart.sequelize.transaction(async (transaction) => {
        const cart = await Cart.findOne({ where: { userId }, transaction });

        if (!cart) {
          throw createHttpError(404, "Cart not found");
        }

        const existingCartItemIndex = cart.dishes.findIndex(
          (item: any) => item.dishData.id == productId
        );

        if (existingCartItemIndex !== -1) {
          // @ts-ignore
          cart.subTotal -= cart.dishes[existingCartItemIndex].subtotal;
          // @ts-ignore
          cart.total -= cart.dishes[existingCartItemIndex].subtotal;
          cart.dishes.splice(existingCartItemIndex, 1);

          await CartService.updateCart(cart, transaction);

          return cart;
        } else {
          throw createHttpError(404, "Cart item not found");
        }
      });
    } catch (error) {
      console.log("🚀 : error", error);
      throw createHttpError(500, "Internal Server Error");
    }
  },
  updateCartItemQuantity: async (
    productId: number,
    userId: number,
    quantityModifier: number
  ) => {
    try {
      // @ts-ignore
      return Cart.sequelize.transaction(async (transaction) => {
        const cart = await Cart.findOne({ where: { userId }, transaction });

        if (!cart) {
          throw createHttpError(404, "Cart not found");
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

          cart.dishes[existingCartItemIndex].quantity += quantityModifier;
          cart.dishes[existingCartItemIndex].subtotal =
            // @ts-ignore
            dish.price * cart.dishes[existingCartItemIndex].quantity;

          await CartService.updateCart(cart, transaction);

          return cart;
        } else {
          throw createHttpError(404, "Cart item not found");
        }
      });
    } catch (error) {
      console.log("🚀 : error", error);
      throw createHttpError(500, "Internal Server Error");
    }
  },

  
  // updateCart to handle any cart updates
  updateCart: async (cart: any, transaction: any) => {
    cart.subTotal = cart.dishes.reduce(
      (total: number, item: any) => total + item.subtotal,
      0
    );
    cart.total = cart.subTotal;

    await Cart.update(
      { dishes: [...cart.dishes], subTotal: cart.subTotal, total: cart.total },
      { where: { id: cart.id }, transaction }
    );
  }
};

export default CartService;
