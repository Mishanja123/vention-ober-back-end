import { OrderStatus } from "../../enums/Order";
import Cart from "../../models/cart";
import Order from "../../models/order";

export const deleteOrderById = async (id: string, userId: number) => {
  const existedOrder = await Order.findByPk(id);

  if (existedOrder) {
    await existedOrder.update({ status: OrderStatus.Canceled });
  }

  await Cart.update(
    {
      total: 0,
      subTotal: 0,
      dishes: [],
    },
    { where: { userId } }
  );
};
