import { OrderStatus } from "../../enums/Order";
import Cart from "../../models/cart";
import Order from "../../models/order";

export const updateOrderById = async (
  id: string,
  userId: number,
  status: OrderStatus
) => {
  const existedOrder = await Order.findByPk(id);

  if (existedOrder) {
    switch (status) {
      case OrderStatus.Completed:
        await existedOrder.update({ status: OrderStatus.Completed });
        break;
      case OrderStatus.Canceled:
        await existedOrder.update({ status: OrderStatus.Canceled });
        break;
      default:
        break;
    }
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
