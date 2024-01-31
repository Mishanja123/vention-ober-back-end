import { DataTypes } from "sequelize";
import sequelize from "../../config/database";

import { ITable } from "../interfaces/Table";

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
