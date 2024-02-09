import { DataTypes, Model } from "sequelize";
import sequelize from "../../config/database";
import { ITimeSlot } from "../interfaces/Table";

export interface ITable extends Model {
  id: number;
  timeSlots: ITimeSlot[];
  seats: number;
}

const Table = sequelize.define<ITable>(
  "Table",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    timeSlots: {
      type: DataTypes.ARRAY(DataTypes.JSONB),
      allowNull: true,
      defaultValue: [],
    },
    seats: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    modelName: "Table",
  }
);

export default Table;
