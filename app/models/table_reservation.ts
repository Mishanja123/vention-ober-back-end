import { DataTypes } from "sequelize";
import sequelize from "../../config/database";

const TableReservation = sequelize.define(
  "TableReservation",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    guests: {
      type: DataTypes.BIGINT,
      allowNull: false,
    },
    reservation_date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    reservation_time: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    with_preorder: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
  },
  {
    modelName: "TableReservation",
  }
);

export default TableReservation;
