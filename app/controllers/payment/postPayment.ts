import { ControllerFunction } from "./../../types/ControllerFunction";
import Payment from "../../services/paymentRequest";

export const postPayment: ControllerFunction = async (req, res, next) => {
  const { addressTitle, cardNumber, cardHolder, cvvNumber, month, year } =
    req.body;
  const userId = 1;
  const result = await Payment.postCreditCard({
    addressTitle,
    cardNumber,
    cardHolder,
    cvvNumber,
    month,
    year,
    userId
  });

  res.status(201).json(result);
};
