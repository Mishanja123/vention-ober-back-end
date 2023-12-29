import { DataTypes, Model, Optional } from "sequelize";
import sequelize from "../../config/database";

interface CreditCardAttributes {
  id: number;
  title: string;
  card_number: string;
  expire_month: number;
  expire_year: number;
  card_code: number;
  name_on_card: string;
}

interface CreditCardCreationAttributes
  extends Optional<CreditCardAttributes, "id"> {}

class CreditCard
  extends Model<CreditCardAttributes, CreditCardCreationAttributes>
  implements CreditCardAttributes
{
  public id!: number;
  public title!: string;
  public card_number!: string;
  public expire_month!: number;
  public expire_year!: number;
  public card_code!: number;
  public name_on_card!: string;
}

CreditCard.init(
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
    card_number: {
      type: DataTypes.STRING(16),
      allowNull: false,
    },
    expire_month: {
      type: DataTypes.SMALLINT,
      allowNull: false,
    },
    expire_year: {
      type: DataTypes.SMALLINT,
      allowNull: false,
    },
    card_code: {
      type: DataTypes.BIGINT,
      allowNull: false,
    },
    name_on_card: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "CreditCard",
  }
);

export default CreditCard;
