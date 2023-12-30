import { DataTypes, Model, Optional } from "sequelize";
import sequelize from "../../config/database";

interface OrderDishAttributes {
  id: number;
  quantity: number;
  subtotal: number;
}

interface OrderDishCreationAttributes
  extends Optional<OrderDishAttributes, "id"> {}

class OrderDish
  extends Model<OrderDishAttributes, OrderDishCreationAttributes>
  implements OrderDishAttributes
{
  public id!: number;
  public quantity!: number;
  public subtotal!: number;
}

OrderDish.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    quantity: {
      type: DataTypes.BIGINT,
      allowNull: false,
    },
    subtotal: {
      type: DataTypes.DECIMAL(10, 2),
    },
  },
  {
    sequelize,
    modelName: "OrderDish",
  }
);

export default OrderDish;
