// userCredentials.ts
import { DataTypes, Model } from "sequelize";
import sequelize from "../../config/database";

interface UserCredentialsAttributes {
  id: number;
  password: string;
  role: "user" | "admin";
}

class UserCredentials
  extends Model<UserCredentialsAttributes>
  implements UserCredentialsAttributes
{
  public id!: number;
  public password!: string;
  public role!: "user" | "admin";
}

UserCredentials.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    role: {
      type: DataTypes.ENUM("user", "admin"),
      allowNull: false
    }
  },
  {
    sequelize,
    modelName: "UserCredentials"
  }
);

export default UserCredentials;
