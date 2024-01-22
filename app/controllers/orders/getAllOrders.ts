import { ControllerFunction } from "../../types/ControllerFunction";
import Orders from "../../services/ordersRequests";

export const getAllOrders: ControllerFunction = async (req, res, next) => {
  const { id } = req.user;
  const orders = await Orders.getAllOrders(id);

  res.status(200).json(orders);
};
