import { ControllerFunction } from "../../types/ControllerFunction";

import { OrderHandlers } from "../../services/orderService";

import orderMesseges from "../../messages/orderMessages";

export const createNewOrder: ControllerFunction = async (req, res, next) => {
  const { orderDate, type, time } = req.body;
  await OrderHandlers.createNewOrder({
    orderDate,
    type,
    time,
    req,
  });

  res
    .status(201)
    .json({ message: orderMesseges.ORDER_SUCCESS_CREATED_MESSAGE });
};
