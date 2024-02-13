import { ControllerFunction } from "../../interfaces/ControllerFunction";

import { OrderHandlers } from "../../services/orderService";

import orderMesseges from "../../messages/orderMessages";

export const createNewOrder: ControllerFunction = async (req, res, next) => {
  const { date, type, time } = req.body;
  const order = await OrderHandlers.createNewOrder({
    date,
    type,
    time,
    req,
  });

  res.status(201).json({
    message: orderMesseges.ORDER_SUCCESS_CREATED_MESSAGE,
    order,
  });
};
