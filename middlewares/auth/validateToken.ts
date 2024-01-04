import jwt from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";

export const validateToken = (req: any, res: Response, next: NextFunction) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1]; //check if bearer

  if (token == null) return res.sendStatus(401); //return key-value

  jwt.verify(
    token,
    process.env.TOKEN_SECRET as string,
    (err: any, user: any) => {
      console.log(err);

      if (err) return res.sendStatus(403);

      req.user = user;

      next();
    }
  );
};
