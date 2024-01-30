import Dish from "../../models/dish";

export const getAllDishes = async () => await Dish.findAll();
