import { DataTypes, Model, Optional } from "sequelize";
import sequelize from "../../config/database";

interface TableAttributes {
  id: number;
  status: "free" | "reserved";
  seats: "4" | "6" | "8";
}

interface TableCreationAttributes extends Optional<TableAttributes, "id"> {}

class Table
  extends Model<TableAttributes, TableCreationAttributes>
  implements TableAttributes
{
  public id!: number;
  public status!: "free" | "reserved";
  public seats!: "4" | "6" | "8";
}

Table.init(
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
    sequelize,
    modelName: "Table",
  }
);

export default Table;
