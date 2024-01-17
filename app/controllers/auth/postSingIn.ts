import Authentication from "../../services/authRequests";
import { ControllerFunction } from "../../types/ControllerFunction";
import { generateAccessToken } from "../../utils/auth/generateAccessToken";
import { generateRefreshToken } from "../../utils/auth/generateRefreshToken";

export const postSingIn: ControllerFunction = async (req, res, next) => {
  const user = await Authentication.loginUser(req.body);

  const accessToken = generateAccessToken(user.dataValues.id);
  const refreshToken = generateRefreshToken(user.dataValues.id);

  const COOKIEAGE = 7 * 24 * 60 * 60 * 1000;

  res
    .status(200)
    .header("Authorization", `Bearer ${accessToken}`)
    .cookie("refreshToken", refreshToken, {
      httpOnly: true,
      maxAge: COOKIEAGE
    })
    .json({
      message: `Name ${user.dataValues.first_name}`
    });
};
