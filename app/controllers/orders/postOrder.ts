import { ControllerFunction } from "./../../types/ControllerFunction";
import Orders from "../../services/ordersRequests";
export const postOrder: ControllerFunction = async (req, res, next) => {
  const { order_date, type, time } = req.body;
  const order = await Orders.postOrder({
    order_date,
    type,
    time,
    req
  });

  res.status(201).json({ message: order });
};
