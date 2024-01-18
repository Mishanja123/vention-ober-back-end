import { errorHandlerMiddleware } from "./../../middleware/errorHandlerMiddleware ";
import { postReservation } from "./postReservation";
import { postOrder } from "./postOrder";
import { deleteOrder } from "./deleteOrder";
import { getOrder } from "./getOrder";
import { getAllOrders } from "./getAllOrders";

export default {
  postReservation: errorHandlerMiddleware(postReservation),
  postOrder: errorHandlerMiddleware(postOrder),
  deleteOrder: errorHandlerMiddleware(deleteOrder),
  getOrder: errorHandlerMiddleware(getOrder),
  getAllOrders: errorHandlerMiddleware(getAllOrders)
};
