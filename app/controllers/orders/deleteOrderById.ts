import { ControllerFunction } from "./../../types/ControllerFunction";
import Orders from "../../models/order";

export const deleteOrderById: ControllerFunction = async (req, res, next) => {
  const orderId = parseInt(req.params.id, 10);
  const order = await Orders.findOne({ where: { id: orderId } });
  if (order) {
    await order.destroy();
  }
  const orders = await Orders.findAll();
  res.status(200).json({ updatedList: orders });
};
