import { ControllerFunction } from "../../interfaces/ControllerFunction";

import { OrderHandlers } from "../../services/orderService";

import orderMesseges from "../../messages/orderMessages";

export const deleteOrderById: ControllerFunction = async (req, res, next) => {
  const { id } = req.params;
  await OrderHandlers.deleteOrderById(id);

  res
    .status(200)
    .json({ message: orderMesseges.ORDER_SUCCESS_DELETED_MESSAGE });
};
