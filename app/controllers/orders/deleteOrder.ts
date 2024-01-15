import { ControllerFunction } from "./../../types/ControllerFunction";
import Orders from "../../services/ordersRequests";
export const deleteOrder: ControllerFunction = async (req, res, next) => {
  const { id } = req.user;
  const order = await Orders.deleteOrder(id);

  res.status(201).json({ message: order });
};
