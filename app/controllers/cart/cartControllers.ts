import { ControllerFunction } from "../../types/ControllerFunction";
import CartService from "../../services/cartRequests";

export const getCartItems: ControllerFunction = async (req, res, next) => {
  try {
    const userId = req.user.id;
    const cartItems = await CartService.getCartItems(userId);
    res.status(200).json({ cartItems });
  } catch (error) {
    next(error);
  }
};

export const addToCart: ControllerFunction = async (req, res, next) => {
  try {
    const { productId, quantity } = req.body;

    await CartService.addToCart(productId, quantity);
    res.status(201).json({ message: "Item added to the cart successfully" });
  } catch (error) {
    next(error);
  }
};

export const updateCartItem: ControllerFunction = async (req, res, next) => {
  try {
    const { productId, quantity } = req.body;
    const userId = req.user.id;
    await CartService.updateCartItem(userId, productId, quantity);
    res.status(200).json({ message: "Cart item updated successfully" });
  } catch (error) {
    next(error);
  }
};

export const removeFromCart: ControllerFunction = async (req, res, next) => {
  try {
    const { productId } = req.params;
    const userId = req.user.id;
    await CartService.removeFromCart(userId, productId);
    res
      .status(200)
      .json({ message: "Item removed from the cart successfully" });
  } catch (error) {
    next(error);
  }
};
