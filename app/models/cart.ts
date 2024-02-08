import { DataTypes, Model } from "sequelize";
import sequelize from "../../config/database";
import User from "./user";
import { IDish } from "../interfaces/Dish";
import { ICart } from "../interfaces/Cart";

const Cart = sequelize.define<ICart>(
  "Cart",
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
    total: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
      defaultValue: 0,
      get() {
        return parseFloat(this.getDataValue("total"));
      },
      set(value: number) {
        this.setDataValue("total", value.toString());
      },
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
      },
    },
    dishes: {
      type: DataTypes.ARRAY(DataTypes.JSONB),
      allowNull: false,
      defaultValue: [],
    },
  },
  {
    modelName: "Cart",
  }
);

// Cart.init(
//   {
//     id: {
//       type: DataTypes.INTEGER,
//       autoIncrement: true,
//       allowNull: false,
//       primaryKey: true,
//     },
//     userId: {
//       type: DataTypes.INTEGER,
//       allowNull: false,
//     },
//     total: {
//       type: DataTypes.DECIMAL(10, 2),
//       allowNull: false,
//       defaultValue: 0,
//       get() {
//         return parseFloat(this.getDataValue("total"));
//       },
//       set(value: number) {
//         this.setDataValue("total", value.toString());
//       },
//     },
//     subTotal: {
//       type: DataTypes.DECIMAL(10, 2),
//       allowNull: false,
//       defaultValue: 0,
//       get() {
//         return parseFloat(this.getDataValue("subTotal"));
//       },
//       set(value: number) {
//         this.setDataValue("subTotal", value.toString());
//       },
//     },
//     dishes: {
//       type: DataTypes.ARRAY(DataTypes.JSONB),
//       allowNull: false,
//       defaultValue: [],
//     },
//   },
//   {
//     sequelize,
//     modelName: "Cart",
//   }
// );

// Cart.belongsTo(User, { foreignKey: "userId" }); //no need as we already have associations

export default Cart;
