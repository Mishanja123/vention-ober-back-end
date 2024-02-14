import { DataTypes, Model } from "sequelize";
import sequelize from "../../config/database";
import { Categories } from "../enums/Dish";

export interface IDish extends Model {
  id: number;
  title: string;
  price: number;
  photo_path: string | null;
  ingredients: Record<string, unknown>[];
  category: Categories;
  weight_grams: number;
}

const Dish = sequelize.define<IDish>(
  "Dish",
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
    price: {
      type: DataTypes.DECIMAL,
      allowNull: false,
    },
    photoPath: {
      type: DataTypes.STRING(2000),
    },
    ingredients: {
      type: DataTypes.JSONB,
      allowNull: false,
    },
    category: {
      type: DataTypes.ENUM(
        "sunrise_specials",
        "culinary_classics",
        "bar_bliss",
        "chefs_pick"
      ),
      allowNull: false,
    },
    weightGrams: {
      type: DataTypes.BIGINT,
      allowNull: false,
    },
  },
  {
    modelName: "Dish",
  }
);

export default Dish;
