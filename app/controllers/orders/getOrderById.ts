import { ControllerFunction } from "../../types/ControllerFunction";

import OrderBuilder from "../../services/orderServices/orderBuilder";

export const getOrderById: ControllerFunction = async (req, res, next) => {
  const { id } = req.params;
  const order = await OrderBuilder.getOrderById(id);

  res.status(200).json(order);
};
