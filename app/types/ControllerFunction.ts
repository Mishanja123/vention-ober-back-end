import { Request, Response, NextFunction } from "express";

export interface ControllerFunction {
  (req: Request, res: Response, next: NextFunction): Promise<void>;
}
