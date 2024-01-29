import { errorHandlerMiddleware } from "./../../middleware/errorHandlerMiddleware ";

import { createTableReservation } from "./createTableReservation";
import { createNewOrder } from "./createNewOrder";
import { deleteOrderById } from "./deleteOrderById";
import { getOrderById } from "./getOrderById";
import { getAllOrdersByUserId } from "./getAllOrdersByUserId";
import { getAllOrdersAdmin } from "./getAllOrdersAdmin";

export default {
  createTableReservation: errorHandlerMiddleware(createTableReservation),
  createNewOrder: errorHandlerMiddleware(createNewOrder),
  deleteOrderById: errorHandlerMiddleware(deleteOrderById),
  getOrderById: errorHandlerMiddleware(getOrderById),
  getAllOrdersByUserId: errorHandlerMiddleware(getAllOrdersByUserId),
  getAllOrdersAdmin: errorHandlerMiddleware(getAllOrdersAdmin),
};
