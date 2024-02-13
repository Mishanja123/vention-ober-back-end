import { AuthenticatedRequest } from "../../interfaces/ControllerFunction";

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
