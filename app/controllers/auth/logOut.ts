import { ControllerFunction } from "../../types/ControllerFunction";

export const logOut: ControllerFunction = async (req, res, next) => {
  res.clearCookie("refreshToken", { path: "/" });
  res.status(200).json({ message: "Logout successful" });
};
