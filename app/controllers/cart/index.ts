import { errorHandlerMiddleware } from "./../../middleware/errorHandlerMiddleware ";
import { getCartItems } from "./getCartItems";
import { addToCart } from "./addToCart";
import { deleteAllCartItems } from "./deleteAllCartItems";
import { deleteACartItemById } from "./deleteACartItemById";
import { updateCartItemQuantity } from "./updateCartItemQuantity";

export default {
  getCartItems: errorHandlerMiddleware(getCartItems),
  addToCart: errorHandlerMiddleware(addToCart),
  deleteAllCartItems: errorHandlerMiddleware(deleteAllCartItems),
  deleteACartItemById: errorHandlerMiddleware(deleteACartItemById),
  updateCartItemQuantity: errorHandlerMiddleware(updateCartItemQuantity)
};
