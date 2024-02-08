import { ControllerFunction } from "../../interfaces/ControllerFunction";

import { OrderHandlers } from "../../services/orderService";

export const getOrderById: ControllerFunction = async (req, res, next) => {
  const { id } = req.params;
  const order = await OrderHandlers.getOrderById(id);

  res.status(200).json(order);
};
