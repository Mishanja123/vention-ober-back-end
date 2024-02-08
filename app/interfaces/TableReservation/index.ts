import { Model } from "sequelize";

export interface ITableReservation extends Model {
  id: number;
  guests: number;
  reservationDate: string;
  reservationTime: string;
  withPreorder: boolean;
}
