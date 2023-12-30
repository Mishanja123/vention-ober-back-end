import { DataTypes, Model, Optional } from "sequelize";
import sequelize from "../../config/database";

interface PaymentAttributes {
  id: number;
  type: "offline" | "online";
  status: "pending" | "failed" | "succeed";
}

interface PaymentCreationAttributes extends Optional<PaymentAttributes, "id"> {}

class Payment
  extends Model<PaymentAttributes, PaymentCreationAttributes>
  implements PaymentAttributes
{
  public id!: number;
  public type!: "offline" | "online";
  public status!: "pending" | "failed" | "succeed";
}

Payment.init(
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
    sequelize,
    modelName: "Payment",
  }
);

export default Payment;
