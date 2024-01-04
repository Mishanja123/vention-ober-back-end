import { Request, Response, NextFunction } from "express";
import Dish from "../../models/dish";



export const getMenuPage = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const dishes = await Dish.findAll();
    res.status(200).json({ dishes });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};
