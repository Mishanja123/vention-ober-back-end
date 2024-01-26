import { ControllerFunction } from "../../types/ControllerFunction";

import ordersServices from "../../services/orderServices";

export const getOrderById: ControllerFunction = async (req, res, next) => {
  const { id } = req.params;
  const order = await ordersServices.getOrderById(id);

  res.status(200).json(order);
};
