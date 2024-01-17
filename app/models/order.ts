import { DataTypes } from "sequelize";
import sequelize from "../../config/database";
import User from "./user";
import TableReservation from "./table_reservation";
import Payment from "./payment";

const Order = sequelize.define(
  "Order",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true
    },
    type: {
      type: DataTypes.ENUM(
        "reservation",
        "reservation_with_preorder",
        "take_away",
        "delivery"
      ),
      allowNull: false
    },
    status: {
      type: DataTypes.ENUM(
        "active",
        "paid",
        "will_be_paid",
        "completed",
        "canceled"
      ),
      allowNull: false
    },
    user_address_id: {
      type: DataTypes.STRING
    },
    payment_id: {
      type: DataTypes.STRING
    },
    order_date: {
      type: DataTypes.STRING,
      allowNull: false
    }
  },
  {
    modelName: "Order"
  }
);


export default Order;
