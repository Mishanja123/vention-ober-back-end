import { ControllerFunction } from "./../../types/ControllerFunction";
import Payment from "../../services/paymentRequest";

export const postPaymentDetails: ControllerFunction = async (
  req,
  res,
  next
) => {
  const { type, dishId, paymentId } = req.body;
  console.log("🚀 : paymentId", paymentId)
  console.log("🚀 : dishId", dishId)
  console.log("🚀 : type", type)
  const result = await Payment.postPaymentDetails(type, dishId, paymentId);

  res.status(201).json(result);
};
