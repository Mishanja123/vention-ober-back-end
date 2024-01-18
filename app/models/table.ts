import { DataTypes } from "sequelize";
import sequelize from "../../config/database";

const Table = sequelize.define(
  "Table",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    status: {
      type: DataTypes.ENUM("free", "reserved"),
      allowNull: false,
    },
    seats: {
      type: DataTypes.ENUM("4", "6", "8"),
      allowNull: false,
    },
  },
  {
    modelName: "Table",
  }
);




export default Table;
