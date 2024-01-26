import { ControllerFunction } from "../../types/ControllerFunction";
import OrderBuilder from "../../services/orderServices/orderBuilder";

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

  await OrderBuilder.createTableReservation({
    reservationDate,
    reservationTime,
    guests,
    withPreorder,
    req,
  });

  res.status(201).json({ message: "Order successfully created" });
};
