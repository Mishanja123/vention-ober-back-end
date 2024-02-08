import { DataTypes, Model } from "sequelize";
import sequelize from "../../config/database";

import Order from "./order";

import { IPayment } from "../interfaces/Payment";

const Payment = sequelize.define<IPayment>(
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
    orderId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: "Orders",
        key: "id",
      },
    },
    userCardId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: "CreditCards",
        key: "id",
      },
    },
  },
  {
    modelName: "Payment",
  }
);

Payment.belongsTo(Order);

export default Payment;
