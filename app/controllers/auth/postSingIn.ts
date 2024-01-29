import Authentication from "../../services/authRequests";
import { ControllerFunction } from "../../types/ControllerFunction";
import { generateAccessToken } from "../../utils/auth/generateAccessToken";
import { generateRefreshToken } from "../../utils/auth/generateRefreshToken";

// Constant to represent the age of the refresh token cookie in milliseconds (7 days)
const SEVEN_DAYS_IN_MS = 7 * 24 * 60 * 60 * 1000;

export const signIn: ControllerFunction = async (req, res, next) => {
  const user = await Authentication.loginUser(req.body);

  const accessToken = generateAccessToken(user.dataValues.id);
  const refreshToken = generateRefreshToken(user.dataValues.id);

  res
    .status(200)
    .header("Authorization", `Bearer ${accessToken}`)
    .cookie("refreshToken", refreshToken, {
      httpOnly: true,
      maxAge: SEVEN_DAYS_IN_MS
    })
    .json({
      message: `Name ${user.dataValues.first_name}`
    });
};
