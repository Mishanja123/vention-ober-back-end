import CreditCard from "../models/credit_card";
import Payments from "../models/payment";
import Order from "../models/order";

const Payment = {
  postCreditCard: async (
    addressTitle: string,
    cardNumber: string,
    cardholder: string,
    cvvNumber: number,
    month: number,
    year: number,
    userId: number
  ) => {
    const res = await CreditCard.create({
      title: addressTitle,
      card_number: cardNumber,
      name_on_card: cardholder,
      card_code: cvvNumber,
      expire_month: month,
      expire_year: year,
      user_id: userId
    });
    return res;
  },
  getPaymentCard: async (id: string) => {
    const card = await CreditCard.findByPk(id);
    return card;
  },
  postPaymentDetails: async (
    type: string,
    dishId: string,
    paymentId: string
  ) => {
    try {
      const orderPaymentCard = await Order.update(
        { paymentId: paymentId },
        { where: { id: dishId } }
      );

      const res = await Payments.create({
        type,
        OrderId: dishId,
        user_card_id: paymentId,
        status: "pending"
      });



      return res;
    } catch (error) {
      console.error("Error in postPaymentDetails:", error);
      return null;
    }
  }
};

export default Payment;
