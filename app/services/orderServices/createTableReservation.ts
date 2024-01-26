import Cart from "../../models/cart";

import TableReservation from "../../models/table_reservation";

import { IReservationData } from "../../interfaces/Order";
import { OrderStatus, OrderTypes } from "../../enums/Order";

export const createTableReservation = async ({
  reservationDate,
  reservationTime,
  guests,
  withPreorder,
  req,
}: IReservationData) => {
  const reservation = await TableReservation.create({
    reservationDate,
    reservationTime,
    guests,
    withPreorder,
    UserId: req.user.id,
  });

  const guestExpected = guests <= 4 ? "4" : guests <= 6 ? "6" : "8";

  const orderType = OrderTypes.WithPreorder
    ? OrderTypes.ReservationWithPreorder
    : OrderTypes.Reservation;

  const existedCart = await Cart.findOne({
    where: { UserId: req.user.id },
  });

  // @ts-ignore
  const table = await reservation.createOrder({
    UserId: req.user.id,
    type: orderType,
    status: OrderStatus.Active,
    order_date: reservationDate + " " + reservationTime,
    dishes: existedCart?.dishes,
    guests: guests,
  });

  // @ts-ignore
  await reservation.createTable({
    status: OrderStatus.Reserved,
    seats: guestExpected,
  });
};
