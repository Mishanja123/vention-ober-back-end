import { PaymentType } from "../constants/payments";
import Payments from "../models/payment";
import Order from "../models/order";
import Cart from "../models/cart";
import paymentMessages from "../messages/paymentMessages";
import { IPaymentDetails, IPaymentFunctions } from "../interfaces/Payment";
import CreditCard from "../models/creditCard";

const payment: IPaymentFunctions = {
  postCreditCard: async (creditCardInfo) => {
    try {
      const result = await CreditCard.create({ ...creditCardInfo });

      const plainResult = result.get({ plain: true });

      return plainResult.id!;
    } catch (error) {
      console.log(error);
    }
  },
  getPaymentCard: async (id) => {
    const card = await CreditCard.findByPk(id);
    return card;
  },
  postPaymentDetails: async (params) => {
    const { type, orderId, paymentId, userId } = params;
    try {
      await Order.update({ payment_id: paymentId }, { where: { id: orderId } });

      const result = await Payments.create({
        type,
        // OrderId: orderId,
        // user_card_id: paymentId,
        status: "pending",
      });

      await Cart.update(
        {
          total: 0,
          subTotal: 0,
          dishes: [],
        },
        { where: { userId } }
      );

      return result;
    } catch (error) {
      console.error(paymentMessages.ERROR_SAVING_PAYMENT_DATA_MESSAGE, error);
      return null;
    }
  },
};

export default payment;
