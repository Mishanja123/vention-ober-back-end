import { Model } from "sequelize";
import { AuthenticatedRequest } from "../../types/ControllerFunction";

export interface IOrder extends Model {
  id: number;
  type: string;
  status: string;
  userAddressId?: string;
  paymentId?: string;
  orderDate: string;
  guests?: number;
  dishes?: any[];
}

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

export interface IOrderBuilder {
  getOrderById: (id: string) => Promise<IOrder | string>;
  getAllOrdersByUserId: (userId: number) => Promise<IOrder[]>;
  getAllOrdersAdmin: () => Promise<IOrder[]>;
  deleteOrderById: (id: string) => Promise<void>;
  createNewOrder: (data: IOrderType) => Promise<void>;
  createTableReservation: (data: IReservationData) => Promise<void>;
}
