import { errorHandlerMiddleware } from "./../../middleware/errorHandlerMiddleware ";
import { patchPayment } from "./patchPayment";
import { postPayment } from "./postPayment";
import { getPaymentCard } from "./getPaymentCard";
import { postPaymentDetails } from "./postPaymentDetails";

export default {
  patchPayment: errorHandlerMiddleware(patchPayment),
  postPayment: errorHandlerMiddleware(postPayment),
  getPaymentCard: errorHandlerMiddleware(getPaymentCard),
  postPaymentDetails: errorHandlerMiddleware(postPaymentDetails)
};
