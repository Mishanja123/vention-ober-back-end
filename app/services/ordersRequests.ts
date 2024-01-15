import Order from "../models/order";

const Orders = {
  getAll: async () => await Order.findAll(),

  findById: async (id: number) => await Order.findByPk(id),

  deleteById: async (id: number) => {
    const order = await Order.findByPk(id);
    order?.destroy();
  },
};

export default Orders;
