import Dish from "../../models/dish";
import { ControllerFunction } from "../../interfaces/ControllerFunction";

import dishData from "../../../data/menuData/dishMoreInfo.json";
import { Categories } from "../../enums/Dish";

export const uploadInitialDishes: ControllerFunction = async (req, res) => {
  try {
    await Promise.all(
      dishData.map(async (dish) => {
        await Dish.create({
          ...dish,
          category: dish.category as Categories,
        });
      })
    );

    res.status(201).json({ message: "Success" });
  } catch (error) {
    console.error("Error synchronizing database:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
