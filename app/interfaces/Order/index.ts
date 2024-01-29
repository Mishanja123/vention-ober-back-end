import { AuthenticatedRequest } from "../../types/ControllerFunction";

export interface IOrderType {
  orderDate: string;
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
