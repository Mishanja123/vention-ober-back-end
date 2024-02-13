import { getPaymentCardById } from "./getPaymentCardById";
import { createCreditCard } from "./createCreditCard";
import { updatePaymentDetails } from "./updatePaymentDetails";
import { updateCreditCardById } from "./updateCreditCardById";
import { getAllCreditCards } from "./getAllCreditCards";

import { ICreditCard } from "../../models/creditCard";

import { IPaymentDetails } from "../../interfaces/Payment";
import { IPayment } from "../../models/payment";

export interface IPaymentHandlers {
  getPaymentCardById: (id: string) => Promise<ICreditCard | null>;
  createCreditCard: (
    creditCardInfo: Omit<ICreditCard, "id">,
    userId: number
  ) => Promise<number>;
  updatePaymentDetails: (data: IPaymentDetails) => Promise<IPayment>;
  updateCreditCardById: (data: Omit<ICreditCard, "userId">) => Promise<ICreditCard | null>;
  getAllCreditCards: (userId: string) => Promise<ICreditCard[]>;
}

export const PaymentHandlers: IPaymentHandlers = {
  getPaymentCardById,
  createCreditCard,
  updatePaymentDetails,
  updateCreditCardById,
  getAllCreditCards,
};
