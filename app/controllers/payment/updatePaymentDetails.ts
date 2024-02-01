import { ControllerFunction } from "../../types/ControllerFunction";

import { PaymentHandlers } from "../../services/paymentService";

export const updatePaymentDetails: ControllerFunction = async (
  req,
  res,
  next
) => {
  const { type, orderId, paymentId } = req.body;
  const { id: userId } = req.user;
  const result = await PaymentHandlers.updatePaymentDetails({
    type,
    orderId,
    paymentId,
    userId,
  });

  res.status(201).json(result);
};
