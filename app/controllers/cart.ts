import { Request, Response, NextFunction } from "express";
import User from "../models/user";

// Get User cart
export const getCart = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const userId = getAuthenticatedUserId(req);

    const userCart = await getUserCart(userId);

    res.status(200).json(userCart);
  } catch (err) {
    res.status(500).json({ message: "Server error " + err });
  }
};

// Add to cart
export const addToCart = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const userId = getAuthenticatedUserId(req);
    const { dish_id } = req.body;

    await addToUserCart(userId, dish_id);

    res.status(200).json({ message: "Dish added to cart successfully" });
  } catch (err) {
    res.status(500).json({ message: "Server error " + err });
  }
};

// Remove from cart
export const removeFromCart = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const userId = getAuthenticatedUserId(req);
    const { dish_id } = req.body;

    await removeFromUserCart(userId, dish_id);

    res.status(200).json({ message: "Dish removed from cart successfully" });
  } catch (err) {
    res.status(500).json({ message: "Server error " + err });
  }
};

// Clear cart
export const clearCart = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const userId = getAuthenticatedUserId(req);

    await clearUserCart(userId);

    res.status(200).json({ message: "Cart cleared successfully" });
  } catch (err) {
    res.status(500).json({ message: "Server error " + err });
  }
};

export const updateCart = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const userId = getAuthenticatedUserId(req);
    const { dish_id, quantity } = req.body;

    await updateQuantityInUserCart(userId, dish_id, quantity);

    res.status(200).json({ message: "Cart updated successfully" });
  } catch (err) {
    res.status(500).json({ message: "Server error " + err });
  }
};

// Helper function to get authenticated user ID
function getAuthenticatedUserId(req: Request): string {
  return "user123";
}

// Example of functions for working with the cart
async function getUserCart(userId: string) {
  return [
    { dish_id: "123", quantity: 2 },
    { dish_id: "456", quantity: 1 },
  ];
}

async function addToUserCart(userId: string, dishId: string) {
  return;
}

async function removeFromUserCart(userId: string, dishId: string) {
  return;
}

async function clearUserCart(userId: string) {
  return;
}

async function updateQuantityInUserCart(
  userId: string,
  dishId: string,
  quantity: number
) {
  return;
}
