import { ControllerFunction } from "../../types/ControllerFunction";

import OrderBuilder from "../../services/orderServices/orderBuilder";

export const deleteOrderById: ControllerFunction = async (req, res, next) => {
  const { id } = req.params;
  await OrderBuilder.deleteOrderById(id);

  res.status(200).json({ message: "Order deleted successfully" });
};
