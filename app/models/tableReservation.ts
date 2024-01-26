import { DataTypes } from "sequelize";
import sequelize from "../../config/database";
import { ITableReservation } from "../interfaces/Table";

const TableReservation = sequelize.define<ITableReservation>(
  "TableReservation",
  {
    id: {
      type: DataTypes.UUID,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    guests: {
      type: DataTypes.BIGINT,
      allowNull: false,
    },
    reservationDate: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    reservationTime: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    withPreorder: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
  },
  {
    modelName: "TableReservation",
  }
);

export default TableReservation;
