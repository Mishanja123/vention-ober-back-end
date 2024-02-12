
import { PaymentHandlers } from "../../services/paymentService";
import { ICreditCard } from "../../models/creditCard";
import { ControllerFunction } from "../../interfaces/ControllerFunction";

export const updateCreditCardById: ControllerFunction = async (
  req,
  res,
  next
) => {
  const {
    month,
    year,
    cvvNumber,
    addressTitle,
    cardNumber,
    cardHolder
  }: Omit<ICreditCard, "userId"> = req.body;

  let cardId = req.params.id!;
  const result = await PaymentHandlers.updateCreditCardById({
    id: cardId,
    addressTitle,
    cardNumber,
    month,
    year,
    cvvNumber,
    cardHolder
  } as Omit<ICreditCard, "userId">);

  res.status(201).json(result);
};
