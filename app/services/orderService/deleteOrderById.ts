import { OrderStatus } from "../../enums/Order";
import Order from "../../models/order";

export const deleteOrderById = async (id: string) => {
  const existedOrder = await Order.findByPk(id);

  if (existedOrder) {
    await existedOrder.update({ status: OrderStatus.Canceled });
  }
};
