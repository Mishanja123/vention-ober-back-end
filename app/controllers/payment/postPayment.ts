import { ControllerFunction } from "./../../types/ControllerFunction";
import Payment from "../../services/paymentRequest";

export const postPayment: ControllerFunction = async (req, res, next) => {
  const { addressTitle, cardNumber, cardholder, cvvNumber, month, year } =
    req.body;
  const userId = req.user.id;
  const result = await Payment.postCreditCard(
    addressTitle,
    cardNumber,
    cardholder,
    cvvNumber,
    month,
    year,
    userId
  );

  res.status(201).json(result);
};
