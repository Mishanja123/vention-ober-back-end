import { DataTypes, Model } from "sequelize";
import sequelize from "../../config/database";

export interface IUser extends Model {
  id: number;
  avatar: string | null;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  userCredentialsId: number;
}

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
  },
  {
    modelName: "User",
  }
);

export default User;
