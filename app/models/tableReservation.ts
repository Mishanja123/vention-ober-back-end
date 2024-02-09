import { DataTypes, Model } from "sequelize";
import sequelize from "../../config/database";

export interface ITableReservation extends Model {
  id: number;
  guests: number;
  reservationDate: string;
  reservationTime: string;
  withPreorder: boolean;
}

const TableReservation = sequelize.define<ITableReservation>(
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
