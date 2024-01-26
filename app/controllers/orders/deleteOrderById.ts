import { ControllerFunction } from "../../types/ControllerFunction";

import { OrderHandlers } from "../../services/orderService";

export const deleteOrderById: ControllerFunction = async (req, res, next) => {
  const { id } = req.params;
  await OrderHandlers.deleteOrderById(id);

  res.status(200).json({ message: "Order deleted successfully" });
};
