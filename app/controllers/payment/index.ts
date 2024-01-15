import { errorHandlerMiddleware } from "./../../middleware/errorHandlerMiddleware ";
import { patchPayment } from "./patchPayment";
import { postPayment } from "./postPayment";

export default {
  patchPayment: errorHandlerMiddleware(patchPayment),
  postPayment: errorHandlerMiddleware(postPayment)
};
