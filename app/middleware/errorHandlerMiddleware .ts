import { Request, Response, NextFunction } from "express";

interface ControllerFunction {
  (req: Request, res: Response, next: NextFunction): Promise<void>;
}

interface MiddlewareFunction {
  (controller: ControllerFunction): (req: Request, res: Response, next: NextFunction) => Promise<void>;
}

export const errorHandlerMiddleware: MiddlewareFunction = (controller) => {
  const middleware: (req: Request, res: Response, next: NextFunction) => Promise<void> = async (req, res, next) => {
    try {
      await controller(req, res, next);
    } catch (error) {
      next(error);
    }
  };

  return middleware;
};