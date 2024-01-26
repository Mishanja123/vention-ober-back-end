import Order from "../../models/order";
import Cart from "../../models/cart";

import { AuthenticatedRequest } from "../../types/ControllerFunction";

export interface OrderType {
  orderDate: string;
  type: string;
  time: string;
  req: AuthenticatedRequest;
}

enum OrderStatus {
  Active = "active",
  Reserved = "reserved",
}

export const createNewOrder = async ({
  orderDate,
  type,
  time,
  req,
}: OrderType) => {
  const existedCart = await Cart.findOne({
    where: { UserId: req.user.id },
  });

  await Order.create({
    orderDate: orderDate + " " + time,
    type,
    UserId: req.user.id,
    status: OrderStatus.Active,
    dishes: existedCart?.dishes,
  });
};
