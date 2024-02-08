import { AuthHandlers } from "../../services/authServices";

import { ControllerFunction } from "../../interfaces/ControllerFunction";
import { generateAccessToken } from "../../utils/auth/generateAccessToken";
import { generateRefreshToken } from "../../utils/auth/generateRefreshToken";

const SEVEN_DAYS_IN_MS = 7 * 24 * 60 * 60 * 1000;

export const signIn: ControllerFunction = async (req, res, next) => {
  const { email, password } = req.body;
  const { id, firstName } = await AuthHandlers.loginUser({ email, password });

  const accessToken = generateAccessToken(id);
  const refreshToken = generateRefreshToken(id);

  res
    .status(200)
    .header("Authorization", `Bearer ${accessToken}`)
    .cookie("refreshToken", refreshToken, {
      httpOnly: true,
      maxAge: SEVEN_DAYS_IN_MS,
    })
    .json({
      message: `Name ${firstName}`,
    });
};
