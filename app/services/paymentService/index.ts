import { getPaymentCardById } from "./getPaymentCardById";
import { createCreditCard } from "./createCreditCard";
import { updatePaymentDetails } from "./updatePaymentDetails";

import { ICreditCard } from "../../interfaces/CreditCard";

import { IPaymentDetails } from "../../interfaces/Payment";
import { IPayment } from "../../interfaces/Payment";

export interface IPaymentHandlers {
  getPaymentCardById: (id: string) => Promise<ICreditCard | null>;
  createCreditCard: (
    creditCardInfo: Omit<ICreditCard, "id">,
    userId: number
  ) => Promise<number>;
  updatePaymentDetails: (data: IPaymentDetails) => Promise<IPayment>;
}

export const PaymentHandlers: IPaymentHandlers = {
  getPaymentCardById,
  createCreditCard,
  updatePaymentDetails,
};
