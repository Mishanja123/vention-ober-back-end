import { Request, Response, NextFunction } from "express";
import { ControllerFunction } from "../types/ControllerFunction";

interface MiddlewareFunction {
  (controller: ControllerFunction): (
    req: Request,
    res: Response,
    next: NextFunction
  ) => Promise<void>;
}

export const errorHandlerMiddleware: MiddlewareFunction = (controller) => {
  const middleware: (
    req: Request,
    res: Response,
    next: NextFunction
  ) => Promise<void> = async (req, res, next) => {
    try {
      await controller(req, res, next);
    } catch (error) {
      console.log("error", error);
      next(error);
    }
  };

  return middleware;
};
