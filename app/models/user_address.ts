import { DataTypes } from "sequelize";
import sequelize from "../../config/database";
import User from "./user";
import Address from "./address";

const UserAddress = sequelize.define(
  "UserAddress",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
  },
  {
    modelName: "UserAddress",
  }
);



export default UserAddress;
