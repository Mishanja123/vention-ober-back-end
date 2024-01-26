import { ControllerFunction } from "../../types/ControllerFunction";

import ordersServices from "../../services/orderServices";

export const createNewOrder: ControllerFunction = async (req, res, next) => {
  const { orderDate, type, time } = req.body;
  await ordersServices.createNewOrder({
    orderDate,
    type,
    time,
    req,
  });

  res.status(201).json({ message: "Order successfully created" });
};
