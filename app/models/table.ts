import { DataTypes, Model } from "sequelize";
import sequelize from "../../config/database";

type AvailableTime = '09:00' | '10:00' | '11:00' | '12:00' | '13:00' | '14:00' | '15:00' | '16:00' | '17:00' | '18:00' | '19:00' | '20:00' | '21:00';

interface TimeSlot {
  weekDay: Date;
  availableTime: AvailableTime[];
}

class Table extends Model {
  public id!: number;
  public timeSlots!: TimeSlot[];
  public seats!: number;
}

Table.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    timeSlots: {
      type: DataTypes.ARRAY(DataTypes.JSONB),
      allowNull: true,
    },
    seats: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "Table",
  }
);

export default Table;
