import { ControllerFunction } from "../../types/ControllerFunction";

import { PaymentHandlers } from "../../services/paymentService";

export const createCreditCard: ControllerFunction = async (req, res, next) => {
  const creditCardInfo = req.body;
  const result = await PaymentHandlers.createCreditCard(creditCardInfo);

  res.status(201).json(result);
};
