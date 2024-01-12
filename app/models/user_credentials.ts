// user_credentials.ts
import { DataTypes } from "sequelize";
import sequelize from "../../config/database";

const UserCredentials = sequelize.define(
  "UserCredentials",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    role: {
      type: DataTypes.ENUM("user", "admin"),
      allowNull: false,
    },
  },
  {
    modelName: "UserCredentials",
  }
);

export default UserCredentials;
