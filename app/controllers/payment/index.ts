import { errorHandlerMiddleware } from "./../../middleware/errorHandlerMiddleware ";
import { createCreditCard } from "./createCreditCard";
import { getPaymentCardById } from "./getPaymentCardById";
import { updatePaymentDetails } from "./updatePaymentDetails";

export default {
  createCreditCard: errorHandlerMiddleware(createCreditCard),
  getPaymentCardById: errorHandlerMiddleware(getPaymentCardById),
  updatePaymentDetails: errorHandlerMiddleware(updatePaymentDetails),
};
