
import { ControllerFunction } from "../../interfaces/ControllerFunction";
import { PaymentHandlers } from "../../services/paymentService";

export const getAllCreditCards: ControllerFunction = async (req, res, next) => {
  const { id: userId } = req.user;
  const result = await PaymentHandlers.getAllCreditCards(userId);

  res.status(201).json(result);
};
