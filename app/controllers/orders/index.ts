import { errorHandlerMiddleware } from "./../../middleware/errorHandlerMiddleware ";
import { postReservation } from "./postReservation";
import { postOrder } from "./postOrder";
import { deleteOrder } from "./deleteOrder";
import { getOrder } from "./getOrder";

export default {
  postReservation: errorHandlerMiddleware(postReservation),
  postOrder: errorHandlerMiddleware(postOrder),
  deleteOrder: errorHandlerMiddleware(deleteOrder),
  getOrder: errorHandlerMiddleware(getOrder)
};
