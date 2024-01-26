import { ControllerFunction } from "../../types/ControllerFunction";

import OrderBuilder from "../../services/orderServices/orderBuilder";

export const getAllOrdersByUserId: ControllerFunction = async (
  req,
  res,
  next
) => {
  const { id } = req.user;
  const orders = await OrderBuilder.getAllOrdersByUserId(id);

  res.status(200).json(orders);
};
