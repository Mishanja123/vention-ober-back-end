import jwt, { JwtPayload } from "jsonwebtoken";
import createHttpError from "../helpers/createHttpError";
import User from "../models/user";
import { ControllerFunction } from "../types/ControllerFunction";

const authenticate: ControllerFunction = async (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return next(createHttpError(401, "Access Denied. No token provided."));
  }

  const [bearer, token] = authHeader.split(" ");

  if (!token || !bearer || bearer.toLowerCase() !== "bearer") {
    return next(createHttpError(401, "Invalid authorization header format."));
  }

  try {
    const { userId } = jwt.verify(
      token,
      process.env.TOKEN_SECRET as string
    ) as JwtPayload;

    const user = await User.findOne({
      where: { id: userId }
    });

    if (!user) {
      return next(createHttpError(404, "Invalid user."));
    }

    req.user = user;
    next();
  } catch (error) {
    next(error);
  }
};

export default authenticate;
