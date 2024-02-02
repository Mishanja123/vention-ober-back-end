import Payments from "../../models/payment";
import Order from "../../models/order";
import Cart from "../../models/cart";
import { PaymentType } from "../../enums/Payment";
import { IPaymentDetails } from "../../interfaces/Payment";

export const updatePaymentDetails = async (data: IPaymentDetails) => {
  const { type, orderId, paymentId, userId } = data;
  await Order.update({ paymentId: paymentId }, { where: { id: orderId } });

  const result = await Payments.create({
    type,
    // OrderId: orderId,
    // user_card_id: paymentId,
    status: PaymentType.Pending,
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
};
