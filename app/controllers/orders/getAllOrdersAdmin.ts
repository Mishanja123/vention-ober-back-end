import { ControllerFunction } from "./../../types/ControllerFunction";

import OrderBuilder from "../../services/orderServices/orderBuilder";

export const getAllOrdersAdmin: ControllerFunction = async (req, res, next) => {
  const orders = await OrderBuilder.getAllOrdersAdmin();
  res.status(200).json(orders);
};
