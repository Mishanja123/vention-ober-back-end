import Dish from "../../models/dish";

export const getRecent = async () =>
  await Dish.findAll({
    limit: 5,
    order: [["createdAt", "DESC"]]
  });
