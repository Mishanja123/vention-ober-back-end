import Dish, { DishAttributes } from "../models/dish";
import { Op } from "sequelize";
import createHttpError from "../helpers/createHttpError";

const Dishes = {
  getAll: async () => await Dish.findAll(),

  getRecent: async () =>
    await Dish.findAll({
      limit: 5,
      order: [["createdAt", "DESC"]]
    }),

  getById: async (dishId: string) => await Dish.findByPk(dishId),
  getMatchedDishes: async (dishQuery: string) =>
    await Dish.findAll({
      where: {
        title: {
          [Op.iLike]: `${dishQuery}%`
        }
      }
    }),
  postDish: async (dish: DishAttributes) => {
    return await Dish.create({ ...dish });
  },

  updateDish: async (dishId: string, updatedData: Partial<Dish>) => {
    const dish = await Dish.findByPk(dishId);

    if (!dish) {
      throw createHttpError(404, "Dish not found");
    }

    Object.assign(dish, updatedData);

    await dish.save();

    return dish;
  }
};

export default Dishes;
