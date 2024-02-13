import { ControllerFunction } from "../../interfaces/ControllerFunction";

import { OrderHandlers } from "../../services/orderService";

import orderMesseges from "../../messages/orderMessages";

export const updateOrderById: ControllerFunction = async (req, res, next) => {
  const { id } = req.params;
  const { id: userId } = req.user;
  const { status } = req.body;
  await OrderHandlers.updateOrderById(id, userId, status);

  res
    .status(200)
    .json({ message: orderMesseges.ORDER_SUCCESS_CANCELE_MESSAGE });
};
