import { Model } from "sequelize";

export interface ITableReservation extends Model {
  id: number;
  guests: number;
  reservationDate: string;
  reservationTime: string;
  withPreorder: boolean;
}

export type AvailableTime =
  | "09:00"
  | "11:00"
  | "12:00"
  | "14:00"
  | "16:00"
  | "18:00"
  | "20:00"
  | "22:00";

export interface ITimeSlot {
  weekDay: string;
  availableTime: AvailableTime[];
}

export interface ITable extends Model {
  id: number;
  timeSlots: ITimeSlot[];
  seats: number;
}
