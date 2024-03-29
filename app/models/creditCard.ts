import { DataTypes, Model } from "sequelize";
import sequelize from "../../config/database";

export interface ICreditCard extends Model {
  id?: string;
  addressTitle: string;
  cardNumber: string;
  month: number;
  year: number;
  cvvNumber: number;
  cardHolder: string;
  userId: number;
}

const CreditCard = sequelize.define<ICreditCard>(
  "CreditCard",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    addressTitle: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    cardNumber: {
      type: DataTypes.STRING(16),
      allowNull: false,
    },
    month: {
      type: DataTypes.SMALLINT,
      allowNull: false,
    },
    year: {
      type: DataTypes.SMALLINT,
      allowNull: false,
    },
    cvvNumber: {
      type: DataTypes.BIGINT,
      allowNull: false,
    },
    cardHolder: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    userId: {
      type: DataTypes.SMALLINT,
      allowNull: false,
    },
  },
  {
    modelName: "CreditCard",
  }
);

export default CreditCard;
