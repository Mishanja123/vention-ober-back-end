import { getOrderById } from "./getOrderById";
import { getAllOrdersByUserId } from "./getAllOrdersByUserId";
import { getAllOrdersAdmin } from "./getAllOrdersAdmin";
import { updateOrderById } from "./updateOrderById";
import { deleteOrderById } from "./deleteOrderById";
import { createNewOrder } from "./createNewOrder";
import { createTableReservation } from "./createTableReservation";

import { IOrderType, IReservationData } from "../../interfaces/Order";
import { OrderStatus } from "../../enums/Order";
import { IOrder } from "../../interfaces/Order";

export interface IOrderHandlers {
  getOrderById: (id: string) => Promise<IOrder | string>;
  getAllOrdersByUserId: (userId: number) => Promise<IOrder[]>;
  getAllOrdersAdmin: () => Promise<IOrder[]>;
  updateOrderById: (
    id: string,
    userId: number,
    status: OrderStatus
  ) => Promise<void>;
  deleteOrderById: (id: string) => Promise<void>;
  createNewOrder: (data: IOrderType) => Promise<IOrder>;
  createTableReservation: (data: IReservationData) => Promise<void>;
}

export const OrderHandlers: IOrderHandlers = {
  getOrderById,
  getAllOrdersByUserId,
  getAllOrdersAdmin,
  updateOrderById,
  deleteOrderById,
  createNewOrder,
  createTableReservation,
};
