import { ControllerFunction } from "./../../types/ControllerFunction";
import Orders from "../../services/ordersRequests";
export const getOrder: ControllerFunction = async (req, res, next) => {
  const { id } = req.params;
  const order = await Orders.getOrder(id);

  res.status(200).json({ message: order });
};
