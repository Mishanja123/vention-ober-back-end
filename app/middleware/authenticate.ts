import jwt, { JwtPayload, TokenExpiredError } from "jsonwebtoken";
import createHttpError from "../helpers/createHttpError";
import User from "../models/user";
import { ControllerFunction } from "../interfaces/ControllerFunction";
import authMessages from "../messages/authMessages";

const authenticate: ControllerFunction = async (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return next(createHttpError(401, authMessages.NO_TOKEN_PROVIDED_MESSAGE));
  }

  const [bearer, token] = authHeader.split(" ");

  if (!token || !bearer || bearer.toLowerCase() !== "bearer") {
    return next(createHttpError(401, authMessages.INVALID_AUTH_HEADER_MESSAGE));
  }

  try {
    const { userId } = jwt.verify(
      token,
      process.env.TOKEN_SECRET as string
    ) as JwtPayload;

    if (!userId) {
      return next(createHttpError(401, authMessages.INVALID_TOKEN_MESSAGE));
    }

    const user = await User.findOne({
      where: { id: userId },
    });

    if (!user) {
      return next(createHttpError(404, authMessages.INVALID_USER_MESSAGE));
    }

    req.user = user;
    next();
  } catch (error) {
    if (error instanceof TokenExpiredError) {
      return next(createHttpError(401, authMessages.EXPIRED_TOKEN_MESSAGE));
    }

    console.log("Error occured", error);
    next(error);
  }
};

export default authenticate;
