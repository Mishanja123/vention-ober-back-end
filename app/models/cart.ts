import { DataTypes } from "sequelize";
import sequelize from "../../config/database";
import User from "./user";

const Cart = sequelize.define(
  "Cart",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
  },
  {
    modelName: "Cart",
  }
);

// Cart.hasOne(User, { foreignKey: "cartId" });

export default Cart;
