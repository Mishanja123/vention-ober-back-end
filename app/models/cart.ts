import { DataTypes, Model } from "sequelize";
import sequelize from "../../config/database";
import User from "./user";
import Dish from "./dish";

interface DishData {
  id: number;
  title: string;
  price: number;
  photo_path: string | null;
  ingredients: Record<string, unknown>[];
  category:
    | "sunrise_specials"
    | "culinary_classics"
    | "bar_bliss"
    | "chefs_pick";
  weight_grams: number;
}

class Cart extends Model {
  public id!: number;
  public userId!: number;
  public dishes!: { dishData: DishData; quantity: number; subtotal: number }[];
}

Cart.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    total: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
      defaultValue: 0,
      get() {
        return parseFloat(this.getDataValue("total"));
      },
      set(value: number) {
        this.setDataValue("total", value.toString());
      }
    },
    subTotal: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
      defaultValue: 0,
      get() {
        return parseFloat(this.getDataValue("subTotal"));
      },
      set(value: number) {
        this.setDataValue("subTotal", value.toString());
      }
    },
    dishes: {
      type: DataTypes.ARRAY(DataTypes.JSONB),
      allowNull: false,
      defaultValue: []
    }
  },
  {
    sequelize,
    modelName: "Cart"
  }
);

Cart.belongsTo(User, { foreignKey: "userId" });

export default Cart;
