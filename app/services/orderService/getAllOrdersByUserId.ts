import Order from "../../models/order";

export const getAllOrdersByUserId = async (userId: number) => {
  return await Order.findAll({
    where: { UserId: userId },
  });
};
