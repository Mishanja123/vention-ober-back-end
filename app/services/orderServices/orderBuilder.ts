import { getOrderById } from "./getOrderById";
import { getAllOrdersByUserId } from "./getAllOrdersByUserId";
import { getAllOrdersAdmin } from "./getAllOrdersAdmin";
import { deleteOrderById } from "./deleteOrderById";
import { createNewOrder } from "./createNewOrder";
import { createTableReservation } from "./createTableReservation";

import { IOrderBuilder } from "../../interfaces/Order";

const OrderBuilder: IOrderBuilder = {
  getOrderById,
  getAllOrdersByUserId,
  getAllOrdersAdmin,
  deleteOrderById,
  createNewOrder,
  createTableReservation,
};

export default OrderBuilder;
