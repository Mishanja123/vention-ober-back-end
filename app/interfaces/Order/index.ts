import { Model } from "sequelize";
import { AuthenticatedRequest } from "../../interfaces/ControllerFunction";
import { IDish } from "../Dish";

export interface IOrderType {
  date: string;
  type: string;
  time: string;
  req: AuthenticatedRequest;
}

export interface IReservationData {
  reservationDate: Date;
  reservationTime: Date;
  guests: number;
  withPreorder: boolean;
  req: AuthenticatedRequest;
}

export interface IOrder extends Model {
  id: number;
  type: string;
  status: string;
  userAddressId?: string;
  paymentId?: string;
  orderDate: string;
  guests?: number;
  dishes?: IDish[];
}
