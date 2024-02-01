import { ControllerFunction } from "../../types/ControllerFunction";

import { PaymentHandlers } from "../../services/paymentService";

export const createCreditCard: ControllerFunction = async (req, res, next) => {
  const creditCardInfo = req.body;
  const { id: userId } = req.user;
  const result = await PaymentHandlers.createCreditCard(creditCardInfo, userId);

  res.status(201).json(result);
};
