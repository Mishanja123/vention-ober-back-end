import { ControllerFunction } from "./../../types/ControllerFunction";
import Dishes from "../../services/dishesRequests";


export const getMenuPage: ControllerFunction = async (req, res, next) => {
  const dishes = await Dishes.getAll();
  res.status(200).json({ dishes });
};
