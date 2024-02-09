import { addToCart } from "./addToCart";
import { deleteAllItems } from "./deleteAllItems";
import { deleteCartItem } from "./deleteCartItem";
import { updateCart } from "./updateCart";
import { updateCartItemQuantity } from "./updateCartItemQuantity";
import { getCartItems } from "./getCartItems";

import { ICart } from "../../models/cart";
import Cart from "../../models/cart";

export interface ICartHandlers {
  addToCart: (productId: number, userId: number) => Promise<ICart>;
  deleteAllItems: (userId: number) => Promise<ICart[]>;
  deleteCartItem: (productId: number, userId: number) => Promise<ICart>;
  getCartItems: (userId: number) => Promise<ICart[]>;
  updateCart: (cart: ICart, transaction: any) => Promise<void>;
  updateCartItemQuantity: (
    productId: number,
    userId: number,
    quantityModifier: number
  ) => Promise<ICart>;
}

export const CartHandlers: ICartHandlers = {
  addToCart,
  deleteAllItems,
  deleteCartItem,
  getCartItems,
  updateCart,
  updateCartItemQuantity,
};
