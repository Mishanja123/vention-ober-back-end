import { Model } from "sequelize";
import { Categories } from "../../enums/Dish";
export interface IDish extends Model {
  id: number;
  title: string;
  price: number;
  photo_path: string | null;
  ingredients: Record<string, unknown>[];
  category: Categories;
  weight_grams: number;
}
