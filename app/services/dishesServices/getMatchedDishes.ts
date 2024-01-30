import Dish from "../../models/dish";
import { Op } from "sequelize";

export const getMatchedDishes = async (dishQuery: string) =>
  await Dish.findAll({
    where: {
      title: {
        [Op.iLike]: `${dishQuery}%`
      }
    }
  });
