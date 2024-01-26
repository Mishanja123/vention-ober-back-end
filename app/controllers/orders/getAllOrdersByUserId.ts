import { ControllerFunction } from "../../types/ControllerFunction";

import ordersServices from "../../services/orderServices";

export const getAllOrdersByUserId: ControllerFunction = async (
  req,
  res,
  next
) => {
  const { id } = req.user;
  const orders = await ordersServices.getAllOrdersByUserId(id);

  res.status(200).json(orders);
};
