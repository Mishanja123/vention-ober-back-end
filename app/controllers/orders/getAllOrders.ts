import { ControllerFunction } from "../../types/ControllerFunction";
import Orders from "../../services/usersRequests";

export const getAllOrders: ControllerFunction = async (req, res, next) => {
  const orders = await Orders.getAll();
  res.status(200).json({ orders });
};
