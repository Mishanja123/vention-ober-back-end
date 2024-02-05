import { ControllerFunction } from "../../types/ControllerFunction";

import { OrderHandlers } from "../../services/orderService";

import orderMesseges from "../../messages/orderMessages";

export const deleteOrderById: ControllerFunction = async (req, res, next) => {
  const { id } = req.params;
  const { id: userId } = req.user;
  await OrderHandlers.deleteOrderById(id, userId);

  res
    .status(200)
    .json({ message: orderMesseges.ORDER_SUCCESS_DELETED_MESSAGE });
};
