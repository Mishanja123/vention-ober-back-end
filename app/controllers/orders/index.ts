import { errorHandlerMiddleware } from "./../../middleware/errorHandlerMiddleware ";
import { getAllOrders } from "./getAllOrders";
import { updateOrder } from "./updateOrder";
import { deleteOrderById } from "./deleteOrderById";

export default {
  getAllOrders: errorHandlerMiddleware(getAllOrders),
  updateOrder: errorHandlerMiddleware(updateOrder),
  deleteOrderById: errorHandlerMiddleware(deleteOrderById),
};
