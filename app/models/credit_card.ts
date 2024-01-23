import { DataTypes } from "sequelize";
import sequelize from "../../config/database";

const CreditCard = sequelize.define(
  "CreditCard",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true
    },
    addressTitle: {
      type: DataTypes.STRING,
      allowNull: false
    },
    cardNumber: {
      type: DataTypes.STRING(16),
      allowNull: false
    },
    month: {
      type: DataTypes.SMALLINT,
      allowNull: false
    },
    year: {
      type: DataTypes.SMALLINT,
      allowNull: false
    },
    cvvNumber: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    cardHolder: {
      type: DataTypes.STRING,
      allowNull: false
    },
    userId: {
      type: DataTypes.SMALLINT,
      allowNull: false
    }
  },
  {
    modelName: "CreditCard"
  }
);

export default CreditCard;
