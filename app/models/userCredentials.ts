import { DataTypes, Model, Optional } from "sequelize";
import sequelize from "../../config/database";

interface UserCredentialsAttributes {
  id: number;
  password: string;
  role: "user" | "admin";
}

interface UserCredentialsCreationAttributes
  extends Optional<UserCredentialsAttributes, "id"> {}

interface UserCredentialsInstance
  extends Model<UserCredentialsAttributes, UserCredentialsCreationAttributes>,
    UserCredentialsAttributes {}

const UserCredentials = sequelize.define<UserCredentialsInstance>(
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
