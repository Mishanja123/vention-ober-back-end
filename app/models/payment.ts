import { DataTypes } from "sequelize";
import sequelize from "../../config/database";
import Order from "./order";

const Payment = sequelize.define(
  "Payment",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    type: {
      type: DataTypes.ENUM("offline", "online"),
      allowNull: false,
    },
    status: {
      type: DataTypes.ENUM("pending", "failed", "succeed"),
      allowNull: false,
    },
  },
  {
    modelName: "Payment",
  }
);


Payment.belongsTo(Order);


export default Payment;
