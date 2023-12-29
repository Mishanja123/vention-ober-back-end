import { DataTypes, Model, Optional } from "sequelize";
import sequelize from "../../config/database";

interface UserAttributes {
  id: number;
  avatar?: string | null;
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  password: string;
  role: "user" | "admin";
}

interface UserCreationAttributes extends Optional<UserAttributes, "id"> {}

class User
  extends Model<UserAttributes, UserCreationAttributes>
  implements UserAttributes
{
  public id!: number;
  public avatar!: string | null;
  public first_name!: string;
  public last_name!: string;
  public email!: string;
  public phone!: string;
  public password!: string;
  public role!: "user" | "admin";
}

User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    avatar: {
      type: DataTypes.STRING,
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
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    role: {
      type: DataTypes.ENUM("user", "admin"),
    },
  },
  {
    sequelize,
    modelName: "User",
  }
);

export default User;
