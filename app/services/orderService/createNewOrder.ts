import Order from "../../models/order";
import Cart from "../../models/cart";

import { IOrderType } from "../../interfaces/Order";
import { OrderStatus } from "../../enums/Order";

export const createNewOrder = async ({
  orderDate,
  type,
  time,
  req,
}: IOrderType) => {
  const existedCart = await Cart.findOne({
    where: { UserId: req.user.id },
  });

  const createdOrder = await Order.create({
    orderDate: orderDate + " " + time,
    type,
    UserId: req.user.id,
    status: OrderStatus.Active,
    dishes: existedCart?.dishes,
  });
  return createdOrder;
};
