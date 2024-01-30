import Dish from "../../models/dish";
import { Model } from "sequelize";
import { addDish } from "./addDish";
import { getAllDishes } from "./getAllDishes";
import { getDishById } from "./getDishById";
import { getMatchedDishes } from "./getMatchedDishes";
import { getRecent } from "./getRecent";
import { updateDish } from "./updateDish";

export interface IDisheshHandlers {
  addDish: (data: any) => Promise<Model<typeof Dish>>;
  getAllDishes: () => Promise<Model<typeof Dish>[]>;
  getDishById: (dishId: string) => Promise<Model<typeof Dish> | null>;
  getMatchedDishes: (dishQuery: string) => Promise<Model<typeof Dish>[]>;
  getRecent: () => Promise<Model<typeof Dish>[]>;
  updateDish: (
    dishId: string,
    updatedData: Partial<typeof Dish>
  ) => Promise<Model<typeof Dish>>;
}

export const DisheshHandlers: IDisheshHandlers = {
  addDish,
  getAllDishes,
  getDishById,
  getMatchedDishes,
  getRecent,
  updateDish
};
