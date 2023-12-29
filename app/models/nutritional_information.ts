import { DataTypes, Model, Optional } from "sequelize";
import sequelize from "../../config/database";

interface NutritionalInformationAttributes {
  id: number;
  protein: number;
  fat: number;
  carbohydrate: number;
  other: number | null;
}

interface NutritionalInformationCreationAttributes
  extends Optional<NutritionalInformationAttributes, "id" | "other"> {}

class NutritionalInformation
  extends Model<
    NutritionalInformationAttributes,
    NutritionalInformationCreationAttributes
  >
  implements NutritionalInformationAttributes
{
  public id!: number;
  public protein!: number;
  public fat!: number;
  public carbohydrate!: number;
  public other!: number | null;
}

NutritionalInformation.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    protein: {
      type: DataTypes.DECIMAL(5, 2),
      allowNull: false,
    },
    fat: {
      type: DataTypes.DECIMAL(5, 2),
      allowNull: false,
    },
    carbohydrate: {
      type: DataTypes.DECIMAL(5, 2),
      allowNull: false,
    },
    other: {
      type: DataTypes.DECIMAL(5, 2),
    },
  },
  {
    sequelize,
    modelName: "NutritionalInformation",
  }
);

export default NutritionalInformation;
