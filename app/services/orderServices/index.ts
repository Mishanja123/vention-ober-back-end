import { Order } from "../../models/order";
import { getOrderById } from "./getOrderById";
import { getAllOrdersByUserId } from "./getAllOrdersByUserId";
import { getAllOrdersAdmin } from "./getAllOrdersAdmin";
import { deleteOrderById } from "./deleteOrderById";
import { OrderType, createNewOrder } from "./createNewOrder";
import {
  ReservationData,
  createTableReservation,
} from "./createTableReservation";

interface OrderServices {
  getOrderById: (id: string) => Promise<Order | string>;
  getAllOrdersByUserId: (userId: number) => Promise<Order[]>;
  getAllOrdersAdmin: () => Promise<Order[]>;
  deleteOrderById: (id: string) => Promise<void>;
  createNewOrder: (data: OrderType) => Promise<void>;
  createTableReservation: (data: ReservationData) => Promise<void>;
}

const orderServices: OrderServices = {
  getOrderById,
  getAllOrdersByUserId,
  getAllOrdersAdmin,
  deleteOrderById,
  createNewOrder,
  createTableReservation,
};

export default orderServices;
