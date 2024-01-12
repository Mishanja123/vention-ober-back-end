import { DataTypes } from "sequelize";
import sequelize from "../../config/database";

const Dish = sequelize.define(
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
    photo_path: {
      type: DataTypes.STRING,
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
    weight_grams: {
      type: DataTypes.BIGINT,
      allowNull: false,
    },
  },
  {
    modelName: "Dish",
  }
);

export default Dish;
