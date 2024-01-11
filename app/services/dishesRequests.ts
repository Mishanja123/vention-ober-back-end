import Dish from "../models/dish";
import { Op } from "sequelize";

const Dishes = {
  getAll: async () => await Dish.findAll(),

  getRecent: async () =>
    await Dish.findAll({
      limit: 5,
      order: [["createdAt", "DESC"]],
    }),

  getById: async (dishId: string) => await Dish.findByPk(dishId),

  getMatchedDishes: async (dishQuery: string) =>
    await Dish.findAll({
      where: {
        title: {
          [Op.iLike]: `${dishQuery}%`,
        },
      },
    }),
};

export default Dishes;
