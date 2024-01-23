import TableReservation from "../models/table_reservation";
import Order from "../models/order";
import { AuthenticatedRequest } from "../types/ControllerFunction";
import Cart from "../models/cart";
import { postOrder } from "../controllers/orders/postOrder";

interface ReservationData {
  reservationDate: Date;
  reservationTime: Date;
  guests: number;
  withPreorder: boolean;
  req: AuthenticatedRequest;
}

interface OrderType {
  orderDate: string;
  type: string;
  req: AuthenticatedRequest;
  time: string;
}

enum OrderTypes {
  withPreorder = "with_preorder",
  ReservationWithPreorder = "reservation_with_preorder",
  Reservation = "reservation",
}

enum OrderStatus {
  Active = "active",
  Reserved = "reserved",
}

const Orders = {
  postTableReservation: async ({
    reservationDate,
    reservationTime,
    guests,
    withPreorder,
    req,
  }: ReservationData) => {
    const reservation = await TableReservation.create({
      reservationDate,
      reservationTime,
      guests,
      withPreorder,
      userId: req.user.id,
    });

    const guestExpected = guests <= 4 ? "4" : guests <= 6 ? "6" : "8";

    const orderType = OrderTypes.withPreorder
      ? OrderTypes.ReservationWithPreorder
      : OrderTypes.Reservation;

    const existedCart = await Cart.findOne({
      where: { userId: req.user.id },
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

    return table;
  },
  postOrder: async ({ orderDate, type, time, req }: OrderType) => {
    const existedCart = await Cart.findOne({
      where: { userId: req.user.id },
    });

    const newOrder = await Order.create({
      order_date: orderDate + " " + time,
      type,
      userId: req.user.id,
      status: OrderStatus.Active,
      dishes: existedCart?.dishes,
    });

    return newOrder;
  },

  deleteOrder: async (id: string) => {
    const existedOrder = await Order.findByPk(id);

    if (existedOrder) {
      await existedOrder.destroy();
      return "Order deleted successfully";
    } else {
      return "Order not found";
    }
  },
  getOrder: async (id: string) => {
    const existedOrder = await Order.findByPk(id);
    if (existedOrder) {
      return existedOrder;
    } else {
      return "Order not found";
    }
  },
  getAllOrders: async (userId: number) => {
    return await Order.findAll({
      where: { userId: userId },
    });
  },
  getAllOrdersAdmin: async () => await Order.findAll(),
};

export default Orders;
