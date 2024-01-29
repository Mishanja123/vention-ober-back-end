import { getOrderById } from "./getOrderById";
import { getAllOrdersByUserId } from "./getAllOrdersByUserId";
import { getAllOrdersAdmin } from "./getAllOrdersAdmin";
import { deleteOrderById } from "./deleteOrderById";
import { createNewOrder } from "./createNewOrder";
import { createTableReservation } from "./createTableReservation";

import { IOrderType, IReservationData } from "../../interfaces/Order";
import { IOrder } from "../../models/order";

export interface IOrderHandlers {
  getOrderById: (id: string) => Promise<IOrder | string>;
  getAllOrdersByUserId: (userId: number) => Promise<IOrder[]>;
  getAllOrdersAdmin: () => Promise<IOrder[]>;
  deleteOrderById: (id: string) => Promise<void>;
  createNewOrder: (data: IOrderType) => Promise<void>;
  createTableReservation: (data: IReservationData) => Promise<void>;
}

export const OrderHandlers: IOrderHandlers = {
  getOrderById,
  getAllOrdersByUserId,
  getAllOrdersAdmin,
  deleteOrderById,
  createNewOrder,
  createTableReservation,
};
