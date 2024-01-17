import { DataTypes } from "sequelize";
import sequelize from "../../config/database";
import User from "./user";
import Table from "./table";
import Order from "./order";

const TableReservation = sequelize.define(
  "TableReservation",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true
    },
    guests: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    reservation_date: {
      type: DataTypes.STRING,
      allowNull: false
    },
    reservation_time: {
      type: DataTypes.STRING,
      allowNull: false
    },
    with_preorder: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    }
  },
  {
    modelName: "TableReservation"
  }
);



export default TableReservation;
