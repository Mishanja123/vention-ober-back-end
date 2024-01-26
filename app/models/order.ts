import { DataTypes } from "sequelize";
import sequelize from "../../config/database";
import { IOrder } from "../interfaces/Order";

const Order = sequelize.define<IOrder>(
  "Order",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    type: {
      type: DataTypes.ENUM(
        "reservation",
        "reservation_with_preorder",
        "take_away",
        "delivery"
      ),
      allowNull: false,
    },
    status: {
      type: DataTypes.ENUM(
        "active",
        "paid",
        "will_be_paid",
        "completed",
        "canceled"
      ),
      allowNull: false,
    },
    userAddressId: {
      type: DataTypes.STRING,
    },
    paymentId: {
      type: DataTypes.STRING,
    },
    orderDate: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    guests: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    dishes: {
      type: DataTypes.ARRAY(DataTypes.JSONB),
      allowNull: true,
      defaultValue: [],
    },
  },
  {
    modelName: "Order",
  }
);

export default Order;
