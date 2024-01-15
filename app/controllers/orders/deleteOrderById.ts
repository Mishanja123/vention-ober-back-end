import { ControllerFunction } from "./../../types/ControllerFunction";
import Orders from "../../services/ordersRequests";

export const deleteOrderById: ControllerFunction = async (req, res, next) => {
  const orderId = parseInt(req.params.id, 10);
  await Orders.deleteById(orderId);
  const orders = await Orders.getAll();
  res.status(200).json({ updatedList: orders });
};
