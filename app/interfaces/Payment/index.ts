import { Model } from "sequelize";
import { PaymentStatus, PaymentType } from "../../enums/Payment";

export interface IPaymentDetails {
  type: PaymentType;
  orderId: string;
  paymentId: string;
  userId: string;
}

export interface IPayment extends Model {
  id?: number;
  type: PaymentType;
  status: PaymentStatus;
  orderId?: number;
  userCardId?: number;
}
