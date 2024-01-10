import Authentication from "../../services/authRequests";
import { ControllerFunction } from "../../types/ControllerFunction";
import { generateAccessToken } from "../../utils/auth/generateAccessToken";
import { generateRefreshToken } from "../../utils/auth/generateRefreshToken";

export const postSingIn: ControllerFunction = async (req, res, next) => {
  const user = await Authentication.loginUser(req.body);

  const accessToken = generateAccessToken(user.id);
  const refreshToken = generateRefreshToken(user.id);

  res
    .status(200)
    .header("Authorization", `Bearer ${accessToken}`)
    .cookie("refreshToken", refreshToken, {
      httpOnly: true,
      maxAge: 7 * 24 * 60 * 60 * 1000
    })
    .json({
      message: `Name ${user.first_name}`
    });
};
