import { ControllerFunction } from "./../../types/ControllerFunction";
import Payment from "../../services/paymentRequest";

export const postPaymentDetails: ControllerFunction = async (
  req,
  res,
  next
) => {
  const { type, orderId, paymentId } = req.body;
  const { id: userId } = req.user;
  const result = await Payment.postPaymentDetails({
    type,
    orderId,
    paymentId,
    userId
  });

  res.status(201).json(result);
};
