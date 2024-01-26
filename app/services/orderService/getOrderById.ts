import Order from "../../models/order";

export const getOrderById = async (id: string) => {
  const existedOrder = await Order.findByPk(id);
  if (existedOrder) {
    return existedOrder;
  } else {
    return "Order not found";
  }
};
