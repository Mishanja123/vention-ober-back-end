import { ControllerFunction } from "./../../types/ControllerFunction";
import Orders from "../../services/ordersRequests";
export const postReservation: ControllerFunction = async (req, res, next) => {
  const {
    date: reservation_date,
    time: reservation_time,
    guests,
    withPreorder: with_preorder
  } = req.body;

  const reserve = await Orders.postTableReservation({
    reservation_date,
    reservation_time,
    guests,
    with_preorder,
    req
  });

  res.status(201).json({ message: reserve });
};
