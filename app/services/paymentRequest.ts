import { ICreditCard } from "./../types/creditCard";

import CreditCard from "../models/credit_card";
import Payments from "../models/payment";
import Order from "../models/order";
import Cart from "../models/cart";

interface PaymentDetailsParams {
  type: string;
  dishId: string;
  paymentId: string;
  userId: number;
}

interface PaymentFunctions {
  postCreditCard: (creditCardInfo: ICreditCard) => Promise<typeof CreditCard>;
  getPaymentCard: (id: string) => Promise<any>;
  postPaymentDetails: (params: PaymentDetailsParams) => Promise<any>;
}

const payment: PaymentFunctions = {
  postCreditCard: async (creditCardInfo) => {
    return await CreditCard.create({ ...creditCardInfo });
  },
  getPaymentCard: async (id) => {
    const card = await CreditCard.findByPk(id);
    return card;
  },
  postPaymentDetails: async (params) => {
    try {
      await Order.update(
        { payment_id: params.paymentId },
        { where: { id: params.dishId } }
      );

      const result = await Payments.create({
        type: params.type,
        OrderId: params.dishId,
        user_card_id: params.paymentId,
        status: "pending"
      });

      await Cart.update(
        {
          total: 0,
          subTotal: 0,
          dishes: []
        },
        { where: { userId: params.userId } }
      );

      return result;
    } catch (error) {
      console.error("Error in postPaymentDetails:", error);
      return null;
    }
  }
};

export default payment;
