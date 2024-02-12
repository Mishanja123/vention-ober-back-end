import { AuthHandlers } from "../../services/authServices";

import { ControllerFunction } from "../../interfaces/ControllerFunction";
import { generateAccessToken } from "../../utils/auth/generateAccessToken";
import { generateRefreshToken } from "../../utils/auth/generateRefreshToken";
import { UserHandlers } from "../../services/userService";

const SEVEN_DAYS_IN_MS = 7 * 24 * 60 * 60 * 1000;

export const signIn: ControllerFunction = async (req, res, next) => {
  const { email, password } = req.body;
  const { id } = await AuthHandlers.loginUser({ email, password });

  const accessToken = generateAccessToken(id);
  const refreshToken = generateRefreshToken(id);
  const user = await UserHandlers.getUserById(id, [
    "id",
    "avatar",
    "firstName",
    "lastName",
    "email",
    "phone",
  ]);
  const userCredentials = await UserHandlers.getUserCredentialsById(id, [
    "role",
  ]);
  res
    .status(200)
    .header("Authorization", `Bearer ${accessToken}`)
    .cookie("refreshToken", refreshToken, {
      httpOnly: true,
      maxAge: SEVEN_DAYS_IN_MS,
      sameSite: "none",
    })
    .json({
      user,
      userCredentials,
    });
};
