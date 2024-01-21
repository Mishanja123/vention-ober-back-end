import TableReservation from "../models/table_reservation";
import Order from "../models/order";
import { AuthenticatedRequest } from "../types/ControllerFunction";
import Cart from "../models/cart";

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

    const existedCart = await Cart.findOne({
      where: { userId: req.user.id }
    });

    // @ts-ignore
    const table = await reservation.createOrder({
      UserId: req.user.id,
      type: orderType,
      status: "active",
      order_date: reservation_date + " " + reservation_time,
      dishes: existedCart?.dishes,
      guests: guests
    });

    // @ts-ignore
    await reservation.createTable({
      seats: guestExpected
    });

    return table;
  },
  postOrder: async ({ order_date, type, time, req }: OrderType) => {
    const existedOrder = await Order.findOne({
      where: { UserId: req.user.id }
    });

    const existedCart = await Cart.findOne({
      where: { userId: req.user.id }
    });

    const newOrder = await Order.create({
      order_date: order_date + " " + time,
      type,
      UserId: req.user.id,
      status: "active",
      dishes: existedCart?.dishes
    });

    return newOrder;
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
  },
  getAllOrders: async (userId: number) => {
    return await Order.findAll({
      where: { UserId: userId }
    });
  }
};

export default Orders;
