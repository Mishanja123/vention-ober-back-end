import { DataTypes, Model, Optional } from "sequelize";
import sequelize from "../../config/database";

interface UserCreditCardAttributes {
  id: number;
}

interface UserCreditCardCreationAttributes
  extends Optional<UserCreditCardAttributes, "id"> {}

class UserCreditCard
  extends Model<UserCreditCardAttributes, UserCreditCardCreationAttributes>
  implements UserCreditCardAttributes
{
  public id!: number;
}

UserCreditCard.init(
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
    modelName: "UserCreditCard",
  }
);

export default UserCreditCard;
