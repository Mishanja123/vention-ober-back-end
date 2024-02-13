import { PaymentType } from "../../enums/Payment";

export interface IPaymentDetails {
  type: PaymentType;
  orderId: string;
  paymentId: string;
  userId: string;
}
