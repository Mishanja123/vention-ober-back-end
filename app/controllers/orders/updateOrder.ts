import { ControllerFunction } from "../../types/ControllerFunction";
import createHttpError from "../../helpers/createHttpError";
import Orders from "../../services/ordersRequests";

export const updateOrder: ControllerFunction = async (req, res, next) => {
  const orderId = parseInt(req.params.id, 10);
  const { status } = req.body;
  const order = await Orders.getOrder(orderId);
  if (!order) {
    throw createHttpError(404, "User not found");
  }

  Object.assign(order, updatedUser);
  await order.save();
  res.status(200).json(order);
};
