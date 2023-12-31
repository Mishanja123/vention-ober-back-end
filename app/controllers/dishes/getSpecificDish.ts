import { Request, Response, NextFunction } from "express";
import Dish from "../../models/dish";

export const getSpecificDish = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { dishId } = req.params;
  
  try {
    const dish = await Dish.findByPk(dishId);

    if (!dish) {
      return res.status(404).json({ error: "Dish not found" });
    }

    res.status(200).json({ dish });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};
