import { ControllerFunction } from "../../types/ControllerFunction";

import { OrderHandlers } from "../../services/orderService";

export const getAllOrdersByUserId: ControllerFunction = async (
  req,
  res,
  next
) => {
  const { id } = req.user;
  const orders = await OrderHandlers.getAllOrdersByUserId(id);

  res.status(200).json(orders);
};
