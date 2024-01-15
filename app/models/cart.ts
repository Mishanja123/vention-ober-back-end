import { DataTypes, Model } from "sequelize";
import sequelize from "../../config/database";
import User from "./user";

class Cart extends Model {
  public id!: number;
  public userId!: number;
  public dishId!: number;
  public quantity!: number;
}

Cart.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    dishId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1,
    },
  },
  {
    sequelize,
    modelName: "Cart",
  }
);

Cart.belongsTo(User, { foreignKey: "userId" });

export default Cart;
