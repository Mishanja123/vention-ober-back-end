import Dish from "../../models/dish";
import { ControllerFunction } from "../../types/ControllerFunction";

import dishData from "../../../data/menuData/dishMoreInfo.json";

export const uploadInitialDishes: ControllerFunction = async (req, res) => {
  try {
    await Promise.all(
      dishData.map(async (dish) => {
        await Dish.create({
          ...dish,
          category: dish.category as
            | "sunrise_specials"
            | "chefs_pick"
            | "culinary_classics"
            | "bar_bliss"
        });
      })
    );

    res.status(201).json({ message: "Success" });
  } catch (error) {
    console.error("Error synchronizing database:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
