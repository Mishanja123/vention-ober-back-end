import { ControllerFunction } from "../../interfaces/ControllerFunction";

import { OrderHandlers } from "../../services/orderService";

export const getAllOrdersAdmin: ControllerFunction = async (req, res, next) => {
  const orders = await OrderHandlers.getAllOrdersAdmin();
  res.status(200).json(orders);
};
