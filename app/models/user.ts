import { DataTypes, Model } from "sequelize";
import sequelize from "../../config/database";
import { IUser } from "../interfaces/User";

const User = sequelize.define<IUser>(
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
    firstName: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    lastName: {
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
    },
    userCredentialsId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "UserCredentials",
        key: "id",
      },
    },
    orderId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: "Orders",
        key: "id",
      },
    },
  },
  {
    modelName: "User",
  }
);

export default User;
