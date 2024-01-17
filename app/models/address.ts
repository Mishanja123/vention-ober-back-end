import { DataTypes } from "sequelize";
import sequelize from "../../config/database";

const Address = sequelize.define(
  "Address",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    city: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    street: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    house_number: {
      type: DataTypes.STRING(10),
      allowNull: false,
    },
    unit: {
      type: DataTypes.STRING(10),
    },
    flat_number: {
      type: DataTypes.STRING(10),
    },
  },
  {
    modelName: "Address",
  }
);

export default Address;
