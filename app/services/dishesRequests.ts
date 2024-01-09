import Dish from "../models/dish";

const Dishes = {
  getAll: async () => await Dish.findAll(),

  getRecent: async () =>
    await Dish.findAll({
      limit: 5,
      order: [["createdAt", "DESC"]]
    }),

  getById: async (dishId: string) => await Dish.findByPk(dishId)
};

export default Dishes;
