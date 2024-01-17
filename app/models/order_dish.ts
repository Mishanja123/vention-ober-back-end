import { DataTypes } from "sequelize";
import sequelize from "../../config/database";

const OrderDish = sequelize.define(
  "OrderDish",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    quantity: {
      type: DataTypes.BIGINT,
      allowNull: false,
    },
    subtotal: {
      type: DataTypes.DECIMAL(10, 2),
    },
  },
  {
    modelName: "OrderDish",
  }
);

export default OrderDish;
