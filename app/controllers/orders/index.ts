import { errorHandlerMiddleware } from "./../../middleware/errorHandlerMiddleware ";
import { postReservation } from "./postReservation";
import { postOrder } from "./postOrder";
import { deleteOrder } from "./deleteOrder";
import { getOrder } from "./getOrder";
import { getAllOrdersByUserId } from "./getAllOrdersByUserId";
import { getAllOrdersAdmin } from "./getAllOrdersAdmin";
// import { updateOrder } from "./updateOrder";

export default {
  postReservation: errorHandlerMiddleware(postReservation),
  postOrder: errorHandlerMiddleware(postOrder),
  deleteOrder: errorHandlerMiddleware(deleteOrder),
  getOrder: errorHandlerMiddleware(getOrder),
  getAllOrdersByUserId: errorHandlerMiddleware(getAllOrdersByUserId),
  getAllOrdersAdmin: errorHandlerMiddleware(getAllOrdersAdmin),
  // updateOrder: errorHandlerMiddleware(updateOrder),
};
