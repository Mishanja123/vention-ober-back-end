import { ControllerFunction } from "./../../types/ControllerFunction";
import Orders from "../../services/ordersRequests";

export const getAllOrdersAdmin: ControllerFunction = async (req, res, next) => {
  const orders = await Orders.getAllOrdersAdmin();
  res.status(200).json(orders);
};
