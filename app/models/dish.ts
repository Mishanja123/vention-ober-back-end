import { DataTypes, Model, Optional } from "sequelize";
import sequelize from "../../config/database";

interface DishAttributes {
  id: number;
  title: string;
  price: number;
  photo_path: string | null;
  ingredients: any; // You may want to replace 'any' with a more specific type for ingredients
  category:
    | "sunrise_specials"
    | "culinary_classics"
    | "bar_bliss"
    | "chefs_pick";
  weight_grams: number;
}

interface DishCreationAttributes
  extends Optional<DishAttributes, "id" | "photo_path"> {}

class Dish
  extends Model<DishAttributes, DishCreationAttributes>
  implements DishAttributes
{
  public id!: number;
  public title!: string;
  public price!: number;
  public photo_path!: string | null;
  public ingredients!: any;
  public category!:
    | "sunrise_specials"
    | "culinary_classics"
    | "bar_bliss"
    | "chefs_pick";
  public weight_grams!: number;
}

Dish.init(
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
    sequelize,
    modelName: "Dish",
  }
);

export default Dish;
