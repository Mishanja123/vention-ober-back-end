import { DataTypes } from "sequelize";
import sequelize from "../../config/database";

const User = sequelize.define(
  "User",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    avatar: {
      type: DataTypes.STRING(500),
    },
    first_name: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    last_name: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    phone: {
      type: DataTypes.STRING(16),
      allowNull: false,
      // unique: true,
    },
    userCredentialsId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "UserCredentials",
        key: "id",
      },
    },
  },
  {
    modelName: "User",
  }
);

export default User;
