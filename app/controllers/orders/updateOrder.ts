import { ControllerFunction } from "../../types/ControllerFunction";
import Orders from "../../services/ordersRequests";
import createHttpError from "../../helpers/createHttpError";

export const updateOrder: ControllerFunction = async (req, res, next) => {
  const orderId = parseInt(req.params.id, 10);
  const updatedOrder = req.body;

  const order = await Orders.findById(orderId);
  if (!order) {
    throw createHttpError(404, "User not found");
  }
  Object.assign(order, updatedOrder);
  await order.save();
  res.status(200).json(order);
};
