import { DataTypes, Model } from "sequelize";
import sequelize from "../../config/database";

export interface IAddress extends Model {
  id?: number;
  title: string;
  city: string;
  street: string;
  houseNumber: string;
  unit: string;
  flatNumber: string;
}

const Address = sequelize.define<IAddress>(
  "Address",
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
    city: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    street: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    houseNumber: {
      type: DataTypes.STRING(10),
      allowNull: false,
    },
    unit: {
      type: DataTypes.STRING(10),
    },
    flatNumber: {
      type: DataTypes.STRING(10),
    },
  },
  {
    modelName: "Address",
  }
);

export default Address;
