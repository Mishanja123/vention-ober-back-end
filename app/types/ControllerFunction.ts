import { Request, Response, NextFunction } from "express";
import User from "../models/user";

export interface AuthenticatedRequest extends Request {
  user?: User;
}
export interface ControllerFunction {
  (req: AuthenticatedRequest, res: Response, next: NextFunction): Promise<void>;
}


