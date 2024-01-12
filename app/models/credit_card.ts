import { DataTypes } from "sequelize";
import sequelize from "../../config/database";

const CreditCard = sequelize.define(
  "CreditCard",
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
    modelName: "CreditCard",
  }
);

export default CreditCard;
