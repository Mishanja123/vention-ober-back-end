import Cart from "../../models/cart";

export const deleteAllItems = async (userId: number) => {
  // @ts-ignore
  return Cart.sequelize.transaction(async (transaction) => {
    const userCart = await Cart.update(
      { dishes: [], subTotal: 0, total: 0 },
      { where: { userId }, transaction }
    );
    return Cart.findAll({ where: { userId }, transaction });
  });
};
