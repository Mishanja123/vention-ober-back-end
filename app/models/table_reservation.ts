import { DataTypes, Model, Optional } from "sequelize";
import sequelize from "../../config/database";

interface TableReservationAttributes {
  id: number;
  guests: number;
  reservation_date: Date;
  reservation_time: Date;
  with_preorder: boolean;
}

interface TableReservationCreationAttributes
  extends Optional<TableReservationAttributes, "id"> {}

class TableReservation
  extends Model<TableReservationAttributes, TableReservationCreationAttributes>
  implements TableReservationAttributes
{
  public id!: number;
  public guests!: number;
  public reservation_date!: Date;
  public reservation_time!: Date;
  public with_preorder!: boolean;
}

TableReservation.init(
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
    sequelize,
    modelName: "TableReservation",
  }
);

export default TableReservation;
