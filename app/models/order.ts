import { DataTypes, Model, Optional } from "sequelize";
import sequelize from "../../config/database";

interface OrderAttributes {
  id: number;
  type: "reservation" | "reservation_with_preorder" | "take_away" | "delivery";
  status: "active" | "paid" | "will_be_paid" | "completed" | "canceled";
  user_address_id: string;
  order_date: Date;
}

interface OrderCreationAttributes extends Optional<OrderAttributes, "id"> {}

class Order
  extends Model<OrderAttributes, OrderCreationAttributes>
  implements OrderAttributes
{
  public id!: number;
  public type!:
    | "reservation"
    | "reservation_with_preorder"
    | "take_away"
    | "delivery";
  public status!: "active" | "paid" | "will_be_paid" | "completed" | "canceled";
  public user_address_id!: string;
  public order_date!: Date;
}

Order.init(
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
    user_address_id: {
      type: DataTypes.STRING,
    },
    order_date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "Order",
  }
);

export default Order;
