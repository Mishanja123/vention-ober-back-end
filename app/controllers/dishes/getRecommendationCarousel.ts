import { Request, Response, NextFunction } from "express";
import Dish from "../../models/dish";


export const getRecommendationCarousel = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const dishes = await Dish.findAll({
      limit: 5,
      order: [["createdAt", "DESC"]]
    });

    res.status(200).json({ dishes });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};
