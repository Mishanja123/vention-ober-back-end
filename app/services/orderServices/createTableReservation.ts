import Cart from "../../models/cart";

import TableReservation from "../../models/tableReservation";

import { IReservationData } from "../../interfaces/Order";
import { OrderStatus, OrderType } from "../../enums/Order";
import { TableStatus } from "../../enums/Table";

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

  const orderType = OrderType.WithPreorder
    ? OrderType.ReservationWithPreorder
    : OrderType.Reservation;

  const existedCart = await Cart.findOne({
    where: { UserId: req.user.id },
  });

  // @ts-ignore
  await reservation.createOrder({
    UserId: req.user.id,
    type: orderType,
    status: OrderStatus.Active,
    orderDate: reservationDate + " " + reservationTime,
    dishes: existedCart?.dishes,
    guests: guests,
  });

  // @ts-ignore
  await reservation.createTable({
    status: TableStatus.Reserved,
    seats: guestExpected,
  });
};
