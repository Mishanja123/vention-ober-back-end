import { ControllerFunction } from "../../types/ControllerFunction";
import createHttpError from "../../helpers/createHttpError";
import jwt, { JwtPayload } from "jsonwebtoken";
import { generateAccessToken } from "../../utils/auth/generateAccessToken";
import { generateRefreshToken } from "../../utils/auth/generateRefreshToken";

// Constant to represent the age of the refresh token cookie in milliseconds (7 days)
const SEVEN_DAYS_IN_MS = 7 * 24 * 60 * 60 * 1000;

export const getRefreshTokens: ControllerFunction = async (req, res, next) => {
  const refreshToken = req.cookies["refreshToken"];

  if (!refreshToken) {
    throw createHttpError(403);
  }

  const { userId } = jwt.verify(
    refreshToken,
    process.env.TOKEN_SECRET as string
  ) as JwtPayload;

  const newAccessToken = generateAccessToken(userId);
  const newRefreshToken = generateRefreshToken(userId);

  res.cookie("refreshToken", newRefreshToken, {
    httpOnly: true,
    sameSite: "strict",
    maxAge: SEVEN_DAYS_IN_MS
  });

  res
    .header("Authorization", `Bearer ${newAccessToken}`)
    .json({ message: "Token refreshed successfully." });
};
