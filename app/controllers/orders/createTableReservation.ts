import { ControllerFunction } from "../../types/ControllerFunction";
import { OrderHandlers } from "../../services/orderService";

import orderMesseges from "../../messages/orderMessages";

export const createTableReservation: ControllerFunction = async (
  req,
  res,
  next
) => {
  const {
    date: reservationDate,
    time: reservationTime,
    guests,
    withPreorder: withPreorder,
  } = req.body;

  await OrderHandlers.createTableReservation({
    reservationDate,
    reservationTime,
    guests,
    withPreorder,
    req,
  });

  res
    .status(201)
    .json({ message: orderMesseges.ORDER_SUCCESS_CREATED_MESSAGE });
};
