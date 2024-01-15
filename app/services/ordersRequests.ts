import TableReservation from "../models/table_reservation";
import Order from "../models/order";
import { AuthenticatedRequest } from "../types/ControllerFunction";

interface ReservationData {
  reservation_date: Date;
  reservation_time: Date;
  guests: number;
  with_preorder: boolean;
  req: AuthenticatedRequest;
}

interface OrderType {
  order_date: string;
  type: string;
  req: AuthenticatedRequest;
  time: string;
}

const Orders = {
  postTableReservation: async ({
    reservation_date,
    reservation_time,
    guests,
    with_preorder,
    req
  }: ReservationData) => {
    const reservation = await TableReservation.create({
      reservation_date,
      reservation_time,
      guests,
      with_preorder,
      UserId: req.user.id
    });

    const guestExpected = guests <= 4 ? "4" : guests <= 6 ? "6" : "8";

    const orderType = with_preorder
      ? "reservation_with_preorder"
      : "reservation";

    // @ts-ignore
    const table = await reservation.createOrder({
      UserId: req.user.id,
      type: orderType,
      status: "active",
      order_date: reservation_date + " " + reservation_time
    });

    // @ts-ignore
    await reservation.createTable({
      status: "reserved",
      seats: guestExpected
    });
    return table;
  },
  postOrder: async ({ order_date, type, time, req }: OrderType) => {
    const existedOrder = await Order.findOne({
      where: { UserId: req.user.id }
    });

    if (existedOrder) {
      const updatedOrder = await existedOrder.update({
        order_date: order_date + " " + time,
        type,
        status: "active"
      });

      return updatedOrder;
    } else {
      const newOrder = await Order.create({
        order_date: order_date + " " + time,
        type,
        UserId: req.user.id,
        status: "active"
      });

      return newOrder;
    }
  },
  deleteOrder: async (id: string) => {
    const existedOrder = await Order.findOne({
      where: { id: id }
    });

    if (existedOrder) {
      await existedOrder.destroy();
      return "Order deleted successfully";
    } else {
      return "Order not found";
    }
  },
  getOrder: async (id: string) => {
    const existedOrder = await Order.findOne({
      where: { id: id }
    });
    if (existedOrder) {
      return existedOrder;
    } else {
      return "Order not found";
    }
  }
};

export default Orders;
