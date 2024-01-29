import { AuthHandlers } from "../../services/authServices";

import { ControllerFunction } from "../../types/ControllerFunction";
import { generateAccessToken } from "../../utils/auth/generateAccessToken";
import { generateRefreshToken } from "../../utils/auth/generateRefreshToken";

export const postSingIn: ControllerFunction = async (req, res, next) => {
  const user = await AuthHandlers.loginUser(req.body);

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
