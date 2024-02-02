import { PaymentType } from "../../enums/Payment";

export interface IPaymentDetails {
  type: PaymentType;
  orderId: string;
  paymentId: string;
  userId: number;
}

export interface IPaymentFunctions {
  postCreditCard: (
    creditCardInfo: Omit<CreditCardAttributes, "id">
  ) => Promise<number | undefined>;
  getPaymentCard: (id: string) => Promise<any>;
  postPaymentDetails: (params: IPaymentDetails) => Promise<any>;
}
