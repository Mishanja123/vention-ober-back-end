import { DataTypes, Model } from "sequelize";
import sequelize from "../../config/database";
import Order from "./order";
import { PaymentStatus, PaymentType } from "../enums/Payment";

export interface IPayment extends Model {
  id?: number;
  type: PaymentType;
  status: PaymentStatus;
  orderId?: number;
  userCardId?: number;
}

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
