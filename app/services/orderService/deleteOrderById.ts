import Order from "../../models/order";
import Payment from "../../models/payment";

export const deleteOrderById = async (id: string) => {
  const existedOrder = await Order.findByPk(id);
  const orderPayment = await Payment.findOne({
    where: { orderId: id },
  });

  if (existedOrder && orderPayment) {
    await orderPayment.destroy();
    await existedOrder.destroy();
  }
};
