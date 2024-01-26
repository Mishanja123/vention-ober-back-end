import Order from "../../models/order";

export const getAllOrdersAdmin = async () => await Order.findAll();
