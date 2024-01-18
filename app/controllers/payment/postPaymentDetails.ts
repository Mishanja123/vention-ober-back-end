import { ControllerFunction } from "./../../types/ControllerFunction";
import Payment from "../../services/paymentRequest";

export const postPaymentDetails: ControllerFunction = async (
  req,
  res,
  next
) => {
  const { type, dishId, paymentId } = req.body;
  const { id } = req.user;
  const result = await Payment.postPaymentDetails(type, dishId, paymentId, id);

  res.status(201).json(result);
};
