import { ControllerFunction } from "./../../types/ControllerFunction";

import ordersServices from "../../services/orderServices";

export const getAllOrdersAdmin: ControllerFunction = async (req, res, next) => {
  const orders = await ordersServices.getAllOrdersAdmin();
  res.status(200).json(orders);
};
