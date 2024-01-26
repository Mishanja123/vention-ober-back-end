import { ControllerFunction } from "../../types/ControllerFunction";

import ordersServices from "../../services/orderServices";

export const deleteOrderById: ControllerFunction = async (req, res, next) => {
  const { id } = req.params;
  await ordersServices.deleteOrderById(id);

  res.status(200).json({ message: "Order deleted successfully" });
};
