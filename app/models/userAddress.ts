import { DataTypes } from "sequelize";
import sequelize from "../../config/database";

//unused

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
