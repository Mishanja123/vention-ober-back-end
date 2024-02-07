import { OrderStatus } from "../../enums/Order";
import Cart from "../../models/cart";
import Order from "../../models/order";

export const updateOrderById = async (
  id: string,
  userId: number,
  status: string
) => {
  const existedOrder = await Order.findByPk(id);

  // if (existedOrder) {
  //   await existedOrder.update({ status: OrderStatus.Canceled });
  // }

  if (existedOrder) {
    switch (status) {
      case "completed":
        await existedOrder.update({ status: OrderStatus.Completed });
        break;
      case "canceled":
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
