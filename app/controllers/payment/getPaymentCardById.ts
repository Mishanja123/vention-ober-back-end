import { ControllerFunction } from "../../types/ControllerFunction";
import { PaymentHandlers } from "../../services/paymentService";

export const getPaymentCardById: ControllerFunction = async (
  req,
  res,
  next
) => {
  const { id } = req.params;

  const paymentCard = await PaymentHandlers.getPaymentCardById(id);

  res.status(200).json(paymentCard);
};
