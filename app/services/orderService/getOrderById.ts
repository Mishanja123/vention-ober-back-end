import Order from "../../models/order";

import orderMesseges from "../../messages/orderMessages";

export const getOrderById = async (id: string) => {
  const existedOrder = await Order.findByPk(id);
  if (existedOrder) {
    return existedOrder;
  } else {
    return orderMesseges.ORDER_NOT_FOUND_MESSAGE;
  }
};
