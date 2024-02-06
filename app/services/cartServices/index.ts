import { addToCart } from "./addToCart";
import { deleteAllItems } from "./deleteAllItems";
import { deleteCartItem } from "./deleteCartItem";
import { updateCart } from "./updateCart";
import { updateCartItemQuantity } from "./updateCartItemQuantity";
import { getCartItems } from "./getCartItems";

import { ICart } from "../../interfaces/Cart";
import Cart from "../../models/cart";

export interface ICartHandlers {
  addToCart: (productId: number, userId: number) => Promise<Cart>;
  deleteAllItems: (userId: number) => Promise<Cart[]>;
  deleteCartItem: (productId: number, userId: number) => Promise<Cart>;
  getCartItems: (userId: number) => Promise<Cart[]>;
  updateCart: (cart: ICart, transaction: any) => Promise<void>;
  updateCartItemQuantity: (
    productId: number,
    userId: number,
    quantityModifier: number
  ) => Promise<Cart>;
}

export const CartHandlers: ICartHandlers = {
  addToCart,
  deleteAllItems,
  deleteCartItem,
  getCartItems,
  updateCart,
  updateCartItemQuantity,
};
