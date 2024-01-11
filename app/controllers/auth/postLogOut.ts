import { ControllerFunction } from "../../types/ControllerFunction";

export const postLogOut: ControllerFunction = async (req, res, next) => {
  res.clearCookie("refreshToken", { path: "/" });
  res.status(200).json({ message: "Logout successful" });
};
