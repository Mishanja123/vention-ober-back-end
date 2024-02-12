import { errorHandlerMiddleware } from "./../../middleware/errorHandlerMiddleware ";
import { createCreditCard } from "./createCreditCard";
import { getPaymentCardById } from "./getPaymentCardById";
import { updatePaymentDetails } from "./updatePaymentDetails";
import { getAllCreditCards } from "./getAllCreditCards";
import { updateCreditCardById } from "./updateCreditCardById";

export default {
  createCreditCard: errorHandlerMiddleware(createCreditCard),
  getPaymentCardById: errorHandlerMiddleware(getPaymentCardById),
  updatePaymentDetails: errorHandlerMiddleware(updatePaymentDetails),
  getAllCreditCards: errorHandlerMiddleware(getAllCreditCards),
  updateCreditCardById: errorHandlerMiddleware(updateCreditCardById)
};
