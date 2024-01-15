import { ControllerFunction } from "./../../types/ControllerFunction";
import Payment from "../../services/paymentRequest";

export const getPaymentCard: ControllerFunction = async (req, res, next) => {
  const { id } = req.params;

  const paymentCard = await Payment.getPaymentCard(id);
  console.log("🚀 : paymentCard", paymentCard)

  res.status(200).json(paymentCard);
};
