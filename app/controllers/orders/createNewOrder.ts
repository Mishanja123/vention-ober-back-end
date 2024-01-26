import { ControllerFunction } from "../../types/ControllerFunction";

import OrderBuilder from "../../services/orderServices/orderBuilder";

export const createNewOrder: ControllerFunction = async (req, res, next) => {
  const { orderDate, type, time } = req.body;
  await OrderBuilder.createNewOrder({
    orderDate,
    type,
    time,
    req,
  });

  res.status(201).json({ message: "Order successfully created" });
};
