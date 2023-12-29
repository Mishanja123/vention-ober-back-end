import { DataTypes, Model, Optional } from "sequelize";
import sequelize from "../../config/database";

interface UserAddressAttributes {
  id: number;
}

interface UserAddressCreationAttributes
  extends Optional<UserAddressAttributes, "id"> {}

class UserAddress
  extends Model<UserAddressAttributes, UserAddressCreationAttributes>
  implements UserAddressAttributes
{
  public id!: number;
}

UserAddress.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
  },
  {
    sequelize,
    modelName: "UserAddress",
  }
);

export default UserAddress;
